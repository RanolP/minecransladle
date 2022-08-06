import { PageContextBuiltInClient } from 'vite-plugin-ssr/client';
import { hydrate, render as renderDom } from 'preact';
import { PageShell } from './PageShell';
import { getPageTitle } from './getPageTitle';

export function render(context: PageContextBuiltInClient) {
  const container = document.getElementById('app');

  if (!container) {
    return; // never happen
  }

  const title = getPageTitle(context);
  const element = <PageShell context={context} />;

  if (context.isHydration) {
    hydrate(element, container);
  } else {
    renderDom(element, container);
  }

  document.title = title;
}
