import { css } from '@linaria/core';

const typography = css`
  @font-face {
    font-family: 'Minecraft';
    font-style: normal;
    font-weight: normal;
    src: local('Minecraft Regular'),
      url('fonts/minecraft-regular.woff') format('woff');
  }

  @font-face {
    font-family: 'Minecraft';
    font-style: italic;
    font-weight: normal;
    src: local('Minecraft Italic'),
      url('fonts/minecraft-italic.woff') format('woff');
  }

  @font-face {
    font-family: 'Minecraft';
    font-style: normal;
    font-weight: bold;
    src: local('Minecraft Bold'),
      url('fonts/minecraft-bold.woff') format('woff');
  }

  @font-face {
    font-family: 'Minecraft';
    font-style: italic;
    font-weight: bold;
    src: local('Minecraft Bold Italic'),
      url('fonts/minecraft-bold-italic.woff') format('woff');
  }

  :global() {
    html {
      font-family: 'Minecraft', 'dalmoori', sans-serif;
    }
  }
`;
