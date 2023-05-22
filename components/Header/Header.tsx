import { extractPath } from "@/lib/extractPath";
import { ColorModeButtonStylesDark, ColorModeButtonStylesLight, LinkStyleButtonStyles } from "@/styles/additionalStyles";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Box, Flex, Button, useColorMode, Tooltip, Text, Image } from "@chakra-ui/react";
import { useRouter } from "next/router";
import NavigationLink from "../NavigationLink/";
import { useSession, signIn, signOut } from 'next-auth/react';
import AdminInfo from "../AdminInfo";

const Header = () => {

  const { colorMode, toggleColorMode } = useColorMode();
  const router = useRouter();
  const navigation = extractPath(router);

  const session = useSession();
  const isLight = colorMode === 'light';

  return (
    <Flex backgroundColor={isLight ? 'white' : '#1a1a1a'} p='1.5em' alignItems={'center'} >

      <Text fontSize='2.25em' textShadow={`1px 1px 3px ${isLight ? '#bbb' : '#EEE'}`} mt='.35em'>Dashboard</Text>
      <Flex w='80%' m='0 auto' direction='column' flex='1' p=' 0 2em'>
        <Flex justifyContent='flex-end' alignItems='center'>

          <AdminInfo />

          <Tooltip label='There is nothing yet'>
            <i className="bi bi-bell" style={{ fontSize: '1.25em', color: isLight ? '#777' : 'white' }}></i>
          </Tooltip>
          <Button {...LinkStyleButtonStyles}
            onClick={() => toggleColorMode()}>
            {
              isLight ?
                <MoonIcon {...isLight ? ColorModeButtonStylesLight : ColorModeButtonStylesDark} />
                :
                <SunIcon {...isLight ? ColorModeButtonStylesLight : ColorModeButtonStylesDark} />
            }
          </Button>
        </Flex>
        <hr style={{ backgroundColor: '#EDEDED50', width: '100%', margin: '1em 0' }} />
        <Box >
          <NavigationLink paths={navigation} />
        </Box>
      </Flex>
    </Flex >
  )
};
export default Header;