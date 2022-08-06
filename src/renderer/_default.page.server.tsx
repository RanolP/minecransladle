import {
  dangerouslySkipEscape,
  escapeInject,
  PageContextBuiltIn,
} from 'vite-plugin-ssr';
import { render as renderToString } from 'preact-render-to-string';
import { PageShell } from './PageShell';
import { getPageTitle } from './getPageTitle';

export function render(context: PageContextBuiltIn) {
  const title = getPageTitle(context);

  const pageHtml = renderToString(<PageShell context={context} />);

  const documentHtml = escapeInject`
    <!DOCTYPE html>
    <html lang="ko">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>${title}</title>
      </head>
      <body>
        <div id="app">
          ${dangerouslySkipEscape(pageHtml)}
        </div>
      </body>
    </html>
  `;
  return { documentHtml };
}
