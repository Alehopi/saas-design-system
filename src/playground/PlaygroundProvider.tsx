import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from 'react';
import { defaultTemplate, templates, type PlaygroundTemplate } from './utils/defaultCode';
import { compressCode, decompressCode } from './utils/compress';

interface PlaygroundContextValue {
  code: string;
  setCode: (code: string) => void;
  activeTemplate: PlaygroundTemplate;
  setActiveTemplate: (template: PlaygroundTemplate) => void;
  resetCode: () => void;
  shareUrl: string | null;
  generateShareUrl: () => void;
  isDark: boolean;
  setIsDark: (dark: boolean) => void;
}

const PlaygroundContext = createContext<PlaygroundContextValue | null>(null);

export function usePlayground() {
  const ctx = useContext(PlaygroundContext);
  if (!ctx) throw new Error('usePlayground must be used within PlaygroundProvider');
  return ctx;
}

interface PlaygroundProviderProps {
  children: ReactNode;
}

export function PlaygroundProvider({ children }: PlaygroundProviderProps) {
  const [activeTemplate, setActiveTemplate] = useState<PlaygroundTemplate>(defaultTemplate);
  const [shareUrl, setShareUrl] = useState<string | null>(null);
  const [isDark, setIsDark] = useState(false);

  // Try to load code from URL on mount
  const [code, setCode] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const compressed = params.get('code');
      if (compressed) {
        const decompressed = decompressCode(compressed);
        if (decompressed) return decompressed;
      }
    }
    return defaultTemplate.code;
  });

  // Detect dark mode from Storybook
  useEffect(() => {
    const checkDark = () => {
      setIsDark(document.body.classList.contains('dark'));
    };
    checkDark();
    const observer = new MutationObserver(checkDark);
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  const resetCode = useCallback(() => {
    setCode(activeTemplate.code);
    setShareUrl(null);
  }, [activeTemplate]);

  const handleSetTemplate = useCallback((template: PlaygroundTemplate) => {
    setActiveTemplate(template);
    setCode(template.code);
    setShareUrl(null);
  }, []);

  const generateShareUrl = useCallback(() => {
    const compressed = compressCode(code);
    const url = `${window.location.origin}${window.location.pathname}?code=${compressed}`;
    setShareUrl(url);
    navigator.clipboard.writeText(url).catch(() => {
      // Fallback: just set the URL, user can copy manually
    });
  }, [code]);

  return (
    <PlaygroundContext.Provider
      value={{
        code,
        setCode,
        activeTemplate,
        setActiveTemplate: handleSetTemplate,
        resetCode,
        shareUrl,
        generateShareUrl,
        isDark,
        setIsDark,
      }}
    >
      {children}
    </PlaygroundContext.Provider>
  );
}

export { templates };
