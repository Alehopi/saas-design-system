import LZString from 'lz-string';

interface SandboxFile {
  content: string;
}

interface SandboxPayload {
  files: Record<string, SandboxFile>;
}

function getParameters(payload: SandboxPayload): string {
  return LZString.compressToBase64(JSON.stringify(payload))
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
}

export async function createCodeSandbox(userCode: string): Promise<string | null> {
  const payload: SandboxPayload = {
    files: {
      'package.json': {
        content: JSON.stringify({
          name: 'apex-playground',
          private: true,
          version: '0.0.0',
          type: 'module',
          scripts: {
            dev: 'vite',
            build: 'vite build',
          },
          dependencies: {
            react: '^19.0.0',
            'react-dom': '^19.0.0',
            'class-variance-authority': '^0.7.1',
            clsx: '^2.1.1',
            'tailwind-merge': '^3.4.0',
            'lucide-react': '^0.563.0',
          },
          devDependencies: {
            '@vitejs/plugin-react': '^4.3.0',
            vite: '^6.0.0',
            tailwindcss: '^3.4.0',
            autoprefixer: '^10.4.0',
            postcss: '^8.4.0',
          },
        }, null, 2),
      },
      'index.html': {
        content: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>APEX Playground</title>
</head>
<body>
  <div id="root"></div>
  <script type="module" src="/src/main.tsx"></script>
</body>
</html>`,
      },
      'src/main.tsx': {
        content: `import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);`,
      },
      'src/App.tsx': {
        content: `import React from 'react';
// Note: Components would need to be installed via apex-cli
// This is a preview of your playground code

${userCode}

export default App;`,
      },
      'src/index.css': {
        content: `@tailwind base;
@tailwind components;
@tailwind utilities;`,
      },
    },
  };

  const parameters = getParameters(payload);
  const url = `https://codesandbox.io/api/v1/sandboxes/define?parameters=${parameters}&query=file=/src/App.tsx`;

  window.open(url, '_blank');
  return url;
}
