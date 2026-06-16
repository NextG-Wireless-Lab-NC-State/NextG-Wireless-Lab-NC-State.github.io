// next/link and next/image auto-prefix basePath, but raw <img src="/..."> does not.
// Wrap those paths with assetPath() so they resolve correctly under GitHub Pages.
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function assetPath(p: string): string {
  if (!p) return p;
  if (/^https?:\/\//.test(p) || p.startsWith("data:")) return p;
  return `${BASE_PATH}${p.startsWith("/") ? p : `/${p}`}`;
}
