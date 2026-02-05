import LZString from 'lz-string';

export function compressCode(code: string): string {
  return LZString.compressToEncodedURIComponent(code);
}

export function decompressCode(compressed: string): string | null {
  try {
    return LZString.decompressFromEncodedURIComponent(compressed);
  } catch {
    return null;
  }
}
