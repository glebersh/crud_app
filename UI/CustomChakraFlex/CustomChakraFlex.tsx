import { ReactNode } from 'react';

import { Box, FlexProps, useStyleConfig } from "@chakra-ui/react";

const CustomChakraFlex = ({ children, styles }: { children: ReactNode, styles?: FlexProps }) => {
  const flex = useStyleConfig('Flex', {});

  return (
    <>
      <Box __css={flex} {...styles}>{children}</Box>
    </>
  )
};
export default CustomChakraFlex;