import { useState } from 'react';
import { usePlayground, templates } from './PlaygroundProvider';

export function PlaygroundToolbar() {
  const {
    activeTemplate,
    setActiveTemplate,
    resetCode,
    code,
    generateShareUrl,
    shareUrl,
  } = usePlayground();

  const [copied, setCopied] = useState<'code' | 'url' | null>(null);

  const handleCopyCode = async () => {
    await navigator.clipboard.writeText(code);
    setCopied('code');
    setTimeout(() => setCopied(null), 2000);
  };

  const handleShare = () => {
    generateShareUrl();
    setCopied('url');
    setTimeout(() => setCopied(null), 2000);
  };

  const handleExportCodeSandbox = async () => {
    // Phase 4 implementation
    const { createCodeSandbox } = await import('./utils/codesandbox');
    const url = await createCodeSandbox(code);
    if (url) window.open(url, '_blank');
  };

  return (
    <div className="flex items-center justify-between gap-3 px-4 py-3 bg-semantic-bg-secondary border-b border-semantic-border-default">
      <div className="flex items-center gap-3">
        {/* Template selector */}
        <label className="text-sm font-medium text-fg-secondary" htmlFor="template-select">
          Template:
        </label>
        <select
          id="template-select"
          value={activeTemplate.name}
          onChange={(e) => {
            const t = templates.find((t) => t.name === e.target.value);
            if (t) setActiveTemplate(t);
          }}
          className="text-sm rounded-md border border-semantic-border-default bg-semantic-bg-primary text-fg-primary px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {templates.map((t) => (
            <option key={t.name} value={t.name}>
              {t.label}
            </option>
          ))}
        </select>

        <button
          onClick={resetCode}
          className="text-sm px-3 py-1.5 rounded-md border border-semantic-border-default bg-semantic-bg-primary text-fg-secondary hover:bg-semantic-bg-tertiary transition-colors"
        >
          Reset
        </button>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={handleCopyCode}
          className="text-sm px-3 py-1.5 rounded-md border border-semantic-border-default bg-semantic-bg-primary text-fg-secondary hover:bg-semantic-bg-tertiary transition-colors"
        >
          {copied === 'code' ? 'Copied!' : 'Copy Code'}
        </button>

        <button
          onClick={handleShare}
          className="text-sm px-3 py-1.5 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition-colors"
        >
          {copied === 'url' ? 'Link Copied!' : 'Share'}
        </button>

        <button
          onClick={handleExportCodeSandbox}
          className="text-sm px-3 py-1.5 rounded-md border border-semantic-border-default bg-semantic-bg-primary text-fg-secondary hover:bg-semantic-bg-tertiary transition-colors"
        >
          CodeSandbox
        </button>
      </div>
    </div>
  );
}
