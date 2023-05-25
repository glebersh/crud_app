import { useBackgroundColor } from "@/hooks/useBackgroundColor";
import { Box, Flex, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

const StatBlock = ({ statValue, statIcon, statTitle }: { statValue: string | number, statIcon: ReactNode, statTitle: string }) => {

  const bgColor = useBackgroundColor();


  return (
    <>
      <Box p='1.5em' backgroundColor={bgColor} w='10em' m='3em'>

        <Flex>{statIcon}
          <Text>{statTitle}</Text>
        </Flex>
        <Text fontSize='2em'>{statValue}</Text>
      </Box>
    </>
  )
};
export default StatBlock;