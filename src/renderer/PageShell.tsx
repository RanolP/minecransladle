import { PageContextBuiltIn } from 'vite-plugin-ssr';
import { PageContextBuiltInClient } from 'vite-plugin-ssr/client';
import '../styles/typography';

export interface PageShellProps {
  context: PageContextBuiltIn | PageContextBuiltInClient;
}

export function PageShell({ context }: PageShellProps): JSX.Element {
  return (
    <>
      <context.Page />
    </>
  );
}
