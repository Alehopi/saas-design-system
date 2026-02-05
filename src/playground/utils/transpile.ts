import * as Babel from '@babel/standalone';

export interface TranspileResult {
  code: string;
  error: string | null;
}

export function transpileCode(code: string): TranspileResult {
  try {
    const result = Babel.transform(code, {
      presets: [
        ['react', { runtime: 'classic' }],
        'typescript',
      ],
      filename: 'playground.tsx',
    });

    return {
      code: result.code || '',
      error: null,
    };
  } catch (err) {
    return {
      code: '',
      error: err instanceof Error ? err.message : 'Unknown transpile error',
    };
  }
}
