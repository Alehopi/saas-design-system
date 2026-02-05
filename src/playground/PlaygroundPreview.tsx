import { useEffect, useRef, useState, useCallback } from 'react';
import { usePlayground } from './PlaygroundProvider';
import { transpileCode } from './utils/transpile';

// Components available in the playground scope
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../components/Card';
import { Alert, AlertTitle, AlertDescription } from '../components/Alert';
import { Badge } from '../components/Badge';
import { Label } from '../components/Label/Label';
import { Textarea } from '../components/Textarea';
import { Switch } from '../components/Switch';
import { Progress } from '../components/Progress';
import { Divider } from '../components/Divider';
import { Spinner } from '../components/Spinner';
import { Avatar } from '../components/Avatar';
import { Checkbox } from '../components/Checkbox';
import { HelperText } from '../components/HelperText';
import { ErrorMessage } from '../components/ErrorMessage';

import React from 'react';
import { createRoot, type Root } from 'react-dom/client';

// Map of components available in playground
const scope: Record<string, unknown> = {
  React,
  useState: React.useState,
  useEffect: React.useEffect,
  useCallback: React.useCallback,
  useRef: React.useRef,
  useMemo: React.useMemo,
  Button,
  Input,
  Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter,
  Alert, AlertTitle, AlertDescription,
  Badge,
  Label,
  Textarea,
  Switch,
  Progress,
  Divider,
  Spinner,
  Avatar,
  Checkbox,
  HelperText,
  ErrorMessage,
};

interface ConsoleEntry {
  type: 'log' | 'warn' | 'error';
  args: string[];
}

interface PlaygroundPreviewProps {
  onConsole?: (entries: ConsoleEntry[]) => void;
}

export function PlaygroundPreview({ onConsole }: PlaygroundPreviewProps) {
  const { code, isDark } = usePlayground();
  const containerRef = useRef<HTMLDivElement>(null);
  const rootRef = useRef<Root | null>(null);
  const [error, setError] = useState<string | null>(null);
  const consoleEntriesRef = useRef<ConsoleEntry[]>([]);
  const debounceRef = useRef<ReturnType<typeof setTimeout>>();

  const renderCode = useCallback((sourceCode: string) => {
    const { code: transpiledCode, error: transpileError } = transpileCode(sourceCode);

    if (transpileError) {
      setError(transpileError);
      return;
    }

    try {
      // Capture console output
      consoleEntriesRef.current = [];
      const fakeConsole = {
        log: (...args: unknown[]) => {
          consoleEntriesRef.current.push({ type: 'log', args: args.map(String) });
          onConsole?.(consoleEntriesRef.current);
        },
        warn: (...args: unknown[]) => {
          consoleEntriesRef.current.push({ type: 'warn', args: args.map(String) });
          onConsole?.(consoleEntriesRef.current);
        },
        error: (...args: unknown[]) => {
          consoleEntriesRef.current.push({ type: 'error', args: args.map(String) });
          onConsole?.(consoleEntriesRef.current);
        },
      };

      // Build scope keys and values for the function
      const scopeKeys = Object.keys(scope);
      const scopeValues = Object.values(scope);

      // Create function from transpiled code
      const fn = new Function(
        ...scopeKeys,
        'console',
        `${transpiledCode}\nreturn typeof App !== 'undefined' ? App : null;`
      );

      const Component = fn(...scopeValues, fakeConsole);

      if (!Component) {
        setError('Please define a function called "App" in your code.');
        return;
      }

      setError(null);

      if (!containerRef.current) return;

      if (!rootRef.current) {
        rootRef.current = createRoot(containerRef.current);
      }

      rootRef.current.render(
        <ErrorBoundary onError={(err) => setError(err)}>
          <Component />
        </ErrorBoundary>
      );
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Runtime error');
    }
  }, [onConsole]);

  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      renderCode(code);
    }, 300);
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [code, renderCode]);

  // Cleanup root on unmount
  useEffect(() => {
    return () => {
      if (rootRef.current) {
        rootRef.current.unmount();
        rootRef.current = null;
      }
    };
  }, []);

  return (
    <div className="h-full w-full overflow-auto rounded-lg border border-semantic-border-default bg-semantic-bg-primary">
      {error ? (
        <div className="p-4">
          <div className="rounded-md bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 p-4">
            <p className="text-sm font-medium text-red-800 dark:text-red-300 mb-1">Error</p>
            <pre className="text-xs text-red-700 dark:text-red-400 whitespace-pre-wrap font-mono">
              {error}
            </pre>
          </div>
        </div>
      ) : null}
      <div
        ref={containerRef}
        className={`min-h-full ${isDark ? 'dark' : ''}`}
        style={{ display: error ? 'none' : 'block' }}
      />
    </div>
  );
}

// Error Boundary as a class component
import { Component, type ErrorInfo } from 'react';

interface ErrorBoundaryProps {
  children: React.ReactNode;
  onError: (error: string) => void;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, _info: ErrorInfo) {
    this.props.onError(error.message);
  }

  render() {
    if (this.state.hasError) return null;
    return this.props.children;
  }
}
