import { Html, Head, Main, NextScript } from 'next/document';
import chakraTheme from '../theme';
import { ColorModeScript } from '@chakra-ui/react';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"></link>
      </Head>
      <body>
        <ColorModeScript initialColorMode={chakraTheme.config.initialColorMode} />
        <Main />
        <NextScript />
      </body>
    </Html >
  )
}
