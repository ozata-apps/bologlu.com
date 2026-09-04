/**
 * Statik asset path'lerini aktif basePath'e göre çözer.
 * - Local / custom domain (bologlu.com): prefix yok, path birebir aynı kalır.
 * - GitHub Pages (GH_PAGES=1 ile build): "/bologlu.com" öneki eklenir.
 */
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function withBasePath(path: string): string {
  if (!path.startsWith("/")) return path;
  if (BASE_PATH && path.startsWith(BASE_PATH)) return path;
  return `${BASE_PATH}${path}`;
}
