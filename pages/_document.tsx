import { Html, Head, Main, NextScript } from 'next/document';
import chakraTheme from '../theme';
import { ColorModeScript } from '@chakra-ui/react';


export default function Document() {
  return (
    <Html lang="en">
      <Head></Head>
      <body>
        <ColorModeScript initialColorMode={chakraTheme.config.initialColorMode} />
        <Main />
        <NextScript />
      </body>
    </Html >
  )
}
