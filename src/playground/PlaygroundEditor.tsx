import Editor from '@monaco-editor/react';
import { usePlayground } from './PlaygroundProvider';

export function PlaygroundEditor() {
  const { code, setCode, isDark } = usePlayground();

  return (
    <div className="h-full w-full overflow-hidden rounded-lg border border-semantic-border-default">
      <Editor
        height="100%"
        language="typescript"
        theme={isDark ? 'vs-dark' : 'light'}
        value={code}
        onChange={(value) => setCode(value || '')}
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
