import { extendTheme, defineStyleConfig } from '@chakra-ui/react';
import { mode, GlobalStyleProps } from '@chakra-ui/theme-tools';

const breakpoints = {
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '80em',
  '2xl': '96em',
};

const fontSizes = {
  xs: "0.75rem",
  sm: "0.875rem",
  md: "1rem",
  lg: "1.125rem",
  xl: "1.25rem",
  "2xl": "1.5rem",
  "3xl": "1.875rem",
  "4xl": "2.25rem",
  "5xl": "3rem",
  "6xl": "3.75rem",
  "7xl": "4.5rem",
  "8xl": "6rem",
  "9xl": "8rem",
};

const colors = {
  "gray": {
    "50": "#F0F2F4",
    "100": "#D6DAE1",
    "200": "#BBC3CE",
    "300": "#A0ABBB",
    "400": "#8693A7",
    "500": "#6B7C94",
    "600": "#556377",
    "700": "#404A59",
    "800": "#2B323B",
    "900": "#15191E"
  },
  "blue": {
    "50": "#EAF3FA",
    "100": "#C5DCF1",
    "200": "#A0C6E8",
    "300": "#7BAFE0",
    "400": "#5699D7",
    "500": "#3183CE",
    "600": "#2768A5",
    "700": "#1E4E7B",
    "800": "#143452",
    "900": "#0A1A29"
  },
  "bgWhite": '#F9F9F9',
  "accentOne": '#3399ff'
};

const Flex = {
  baseStyle: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center'
  }
};


export default extendTheme({
  breakpoints,
  fontSizes,
  colors,
  config: {
    initialColorMode: 'system',
    useSystemColorMode: false,
    disableTransitionOnChange: false,
  },
  components: {
    Flex
  },
  styles: {
    global: (props: GlobalStyleProps) => ({
      body: {
        transitionProperty: "background-color",
        transitionDuration: "ultra-slow",
        bg: mode('#F9F9F9', '#212121')(props),
        color: mode('black', 'white')(props),
      }
    })
  }
})