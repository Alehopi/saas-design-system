import { useState, useCallback } from 'react';
import { PlaygroundProvider } from './PlaygroundProvider';
import { PlaygroundEditor } from './PlaygroundEditor';
import { PlaygroundPreview } from './PlaygroundPreview';
import { PlaygroundToolbar } from './PlaygroundToolbar';
import { PlaygroundConsole } from './PlaygroundConsole';

interface ConsoleEntry {
  type: 'log' | 'warn' | 'error';
  args: string[];
}

export function PlaygroundLayout() {
  const [consoleEntries, setConsoleEntries] = useState<ConsoleEntry[]>([]);
  const [activeTab, setActiveTab] = useState<'editor' | 'preview'>('editor');

  const handleConsole = useCallback((entries: ConsoleEntry[]) => {
    setConsoleEntries([...entries]);
  }, []);

  return (
    <PlaygroundProvider>
      <div
        className="flex flex-col bg-semantic-bg-primary"
        style={{ height: 'calc(100vh - 40px)', minHeight: '500px' }}
      >
        {/* Toolbar */}
        <PlaygroundToolbar />

        {/* Mobile tabs */}
        <div className="flex md:hidden border-b border-semantic-border-default">
          <button
            onClick={() => setActiveTab('editor')}
            className={`flex-1 py-2 text-sm font-medium text-center transition-colors ${
              activeTab === 'editor'
                ? 'text-blue-500 border-b-2 border-blue-500'
                : 'text-fg-muted hover:text-fg-primary'
            }`}
          >
            Editor
          </button>
          <button
            onClick={() => setActiveTab('preview')}
            className={`flex-1 py-2 text-sm font-medium text-center transition-colors ${
              activeTab === 'preview'
                ? 'text-blue-500 border-b-2 border-blue-500'
                : 'text-fg-muted hover:text-fg-primary'
            }`}
          >
            Preview
          </button>
        </div>

        {/* Desktop: split pane / Mobile: tabs */}
        <div className="flex-1 flex min-h-0">
          {/* Editor */}
          <div
            className={`${
              activeTab === 'editor' ? 'flex' : 'hidden'
            } md:flex md:w-1/2 flex-col min-h-0`}
          >
            <div className="flex items-center px-4 py-2 bg-semantic-bg-secondary border-b border-semantic-border-default">
              <span className="text-xs font-mono text-fg-muted">playground.tsx</span>
            </div>
            <div className="flex-1 min-h-0">
              <PlaygroundEditor />
            </div>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px bg-semantic-border-default" />

          {/* Preview */}
          <div
            className={`${
              activeTab === 'preview' ? 'flex' : 'hidden'
            } md:flex md:w-1/2 flex-col min-h-0`}
          >
            <div className="flex items-center px-4 py-2 bg-semantic-bg-secondary border-b border-semantic-border-default">
              <span className="text-xs font-mono text-fg-muted">Preview</span>
              <div className="ml-auto flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-xs text-fg-muted">Live</span>
              </div>
            </div>
            <div className="flex-1 min-h-0 overflow-auto">
              <PlaygroundPreview onConsole={handleConsole} />
            </div>
          </div>
        </div>

        {/* Console */}
        <PlaygroundConsole
          entries={consoleEntries}
          onClear={() => setConsoleEntries([])}
        />
      </div>
    </PlaygroundProvider>
  );
}
