import { extractPath } from "@/lib/extractPath";
import { ColorModeButtonStylesDark, ColorModeButtonStylesLight, LinkStyleButtonStyles } from "@/styles/additionalStyles";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Box, Flex, Button, useColorMode, Tooltip, Text, Image } from "@chakra-ui/react";
import { useRouter } from "next/router";
import NavigationLink from "../NavigationLink";
import AdminInfo from "../AdminInfo";

const Header = () => {

  const { colorMode, toggleColorMode } = useColorMode();
  const router = useRouter();
  const navigation = extractPath(router);

  const isLight = colorMode === 'light';

  return (
    <Flex backgroundColor={isLight ? 'white' : '#1a1a1a'} p='1.5em' alignItems={'center'} >
      <Flex w='80%' m='0 auto' direction='column' flex='1' p=' 0 2em'>
        <Flex justifyContent='flex-end' alignItems='center'>
          <Text fontSize='2.25em' m='.35em auto 0 0'>Dashboard</Text>

          <AdminInfo />

          <Flex gap='.75em'>

            <Tooltip label='There is nothing yet'>
              <Button backgroundColor={'transparent'} h='50px' w='50px' borderRadius='50%' _hover={{ backgroundColor: isLight ? '#EEE' : '#55555550' }}>
                <i className="bi bi-envelope-at" style={{ fontSize: '1.25em', color: isLight ? '#777' : '#ddd' }}></i>
              </Button>
            </Tooltip>

            <Tooltip label='There is nothing yet'>
              <Button backgroundColor={'transparent'} h='50px' w='50px' borderRadius='50%' _hover={{ backgroundColor: isLight ? '#EEE' : '#55555550' }}>
                <i className="bi bi-bell" style={{ fontSize: '1.25em', color: isLight ? '#777' : '#ddd' }}></i>
              </Button>
            </Tooltip>

            <Button backgroundColor={'transparent'} h='50px' w='50px' borderRadius='50%' _hover={{ backgroundColor: isLight ? '#EEE' : '#55555550' }}
              onClick={() => toggleColorMode()}>
              {
                isLight ?
                  <MoonIcon {...isLight ? ColorModeButtonStylesLight : ColorModeButtonStylesDark} />
                  :
                  <SunIcon {...isLight ? ColorModeButtonStylesLight : ColorModeButtonStylesDark} />
              }
            </Button>
          </Flex>
        </Flex>
        {/* <hr style={{ width: '100%', margin: '1em 0' }} />
        <Box >
          <NavigationLink paths={navigation} />
        </Box> */}
      </Flex>
    </Flex>
  )
};
export default Header;