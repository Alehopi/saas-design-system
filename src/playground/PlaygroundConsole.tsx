interface ConsoleEntry {
  type: 'log' | 'warn' | 'error';
  args: string[];
}

interface PlaygroundConsoleProps {
  entries: ConsoleEntry[];
  onClear: () => void;
}

export function PlaygroundConsole({ entries, onClear }: PlaygroundConsoleProps) {
  if (entries.length === 0) {
    return (
      <div className="flex items-center justify-between px-4 py-2 bg-semantic-bg-secondary border-t border-semantic-border-default">
        <span className="text-xs text-fg-muted font-mono">Console</span>
      </div>
    );
  }

  return (
    <div className="border-t border-semantic-border-default bg-semantic-bg-secondary">
      <div className="flex items-center justify-between px-4 py-1.5 border-b border-semantic-border-default">
        <span className="text-xs text-fg-muted font-mono">
          Console ({entries.length})
        </span>
        <button
          onClick={onClear}
          className="text-xs text-fg-muted hover:text-fg-primary transition-colors"
        >
          Clear
        </button>
      </div>
      <div className="max-h-32 overflow-y-auto px-4 py-2 space-y-1">
        {entries.map((entry, i) => (
          <div
            key={i}
            className={`text-xs font-mono ${
              entry.type === 'error'
                ? 'text-red-500'
                : entry.type === 'warn'
                  ? 'text-yellow-500'
                  : 'text-fg-secondary'
            }`}
          >
            <span className="text-fg-muted mr-2">
              {entry.type === 'error' ? '✗' : entry.type === 'warn' ? '⚠' : '›'}
            </span>
            {entry.args.join(' ')}
          </div>
        ))}
      </div>
    </div>
  );
}
