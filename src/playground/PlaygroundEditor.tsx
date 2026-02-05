import Editor, { type Monaco } from '@monaco-editor/react';
import { usePlayground } from './PlaygroundProvider';

export function PlaygroundEditor() {
  const { code, setCode, isDark } = usePlayground();

  const handleEditorDidMount = (_editor: unknown, monaco: Monaco) => {
    // Configure TypeScript compiler options
    monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
      jsx: monaco.languages.typescript.JsxEmit.React,
      jsxFactory: 'React.createElement',
      target: monaco.languages.typescript.ScriptTarget.ES2020,
      allowNonTsExtensions: true,
      moduleResolution: monaco.languages.typescript.ModuleResolutionKind.NodeJs,
      module: monaco.languages.typescript.ModuleKind.ESNext,
      noEmit: true,
      esModuleInterop: true,
      skipLibCheck: true,
    });

    // Disable TypeScript errors that don't apply in playground
    monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({
      noSemanticValidation: false,
      noSyntaxValidation: false,
      diagnosticCodesToIgnore: [
        2307, // Cannot find module
        2304, // Cannot find name (for globals)
        2552, // Cannot find name (JSX)
        2339, // Property does not exist
        1005, // ';' expected
        7016, // Could not find declaration file
      ],
    });

    // Add type declarations for all playground globals
    monaco.languages.typescript.typescriptDefaults.addExtraLib(
      `
      declare const React: any;
      declare const useState: any;
      declare const useEffect: any;
      declare const useCallback: any;
      declare const useRef: any;
      declare const useMemo: any;

      declare const Button: any;
      declare const Input: any;
      declare const Card: any;
      declare const CardHeader: any;
      declare const CardTitle: any;
      declare const CardDescription: any;
      declare const CardContent: any;
      declare const CardFooter: any;
      declare const Alert: any;
      declare const AlertTitle: any;
      declare const AlertDescription: any;
      declare const Badge: any;
      declare const Label: any;
      declare const Textarea: any;
      declare const Switch: any;
      declare const Progress: any;
      declare const Divider: any;
      declare const Spinner: any;
      declare const Avatar: any;
      declare const Checkbox: any;
      declare const HelperText: any;
      declare const ErrorMessage: any;
      `,
      'file:///playground-globals.d.ts'
    );
  };

  return (
    <div className="h-full w-full overflow-hidden rounded-lg border border-semantic-border-default">
      <Editor
        height="100%"
        language="typescript"
        theme={isDark ? 'vs-dark' : 'light'}
        value={code}
        onChange={(value) => setCode(value || '')}
        onMount={handleEditorDidMount}
        options={{
          minimap: { enabled: false },
          fontSize: 14,
          fontFamily: "'JetBrains Mono', 'Fira Code', 'Cascadia Code', monospace",
          lineNumbers: 'on',
          scrollBeyondLastLine: false,
          automaticLayout: true,
          tabSize: 2,
          wordWrap: 'on',
          padding: { top: 16 },
          renderLineHighlight: 'line',
          bracketPairColorization: { enabled: true },
          smoothScrolling: true,
          cursorBlinking: 'smooth',
          cursorSmoothCaretAnimation: 'on',
        }}
      />
    </div>
  );
}
