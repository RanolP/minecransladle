import { PageContextBuiltIn } from 'vite-plugin-ssr';
import { PageContextBuiltInClient } from 'vite-plugin-ssr/client';

export function getPageTitle(
  context: PageContextBuiltIn | PageContextBuiltInClient,
): string {
  return 'Minecransladle';
}
