import { ColorModeButtonStylesDark, ColorModeButtonStylesLight } from "@/styles/additionalStyles";
import { Flex, Button, useColorMode, Tooltip, Text, Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
import AdminInfo from "../AdminInfo";
import { BsBell, BsChevronLeft, BsEnvelopeAt, BsMoonFill, BsSun } from "react-icons/bs";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const router = useRouter();
  const isLight = colorMode === 'light';

  return (
    <Flex backgroundColor={isLight ? 'white' : '#1a1a1a'} p='1.5em' alignItems={'center'} >
      <Flex w='80%' m='0 auto' direction='column' flex='1' p=' 0 2em'>
        <Flex justifyContent='flex-end' alignItems='center'>
          <Flex mr='auto' alignItems='center'>
            <Tooltip label='Back to previous page'>
              <Button onClick={() => router.back()} _hover={{ color: 'accentOne' }}
                fontSize='1.5em' variant='link'><BsChevronLeft /></Button>
            </Tooltip>
            <Text fontSize='2.25em' ml='1em'>Dashboard</Text>
          </Flex>
          <AdminInfo />

          <Flex gap='.75em'>

            <Tooltip label='There is nothing yet'>
              <Button backgroundColor={'transparent'} h='50px' w='50px' borderRadius='50%' _hover={{ backgroundColor: isLight ? '#EEE' : '#55555550' }}>
                <BsEnvelopeAt fontSize='1.25em' color={isLight ? '#777' : '#ddd'} />
              </Button>
            </Tooltip>

            <Tooltip label='There is nothing yet'>
              <Button backgroundColor={'transparent'} h='50px' w='50px' borderRadius='50%' _hover={{ backgroundColor: isLight ? '#EEE' : '#55555550' }}>
                <BsBell fontSize='1.25em' color={isLight ? '#777' : '#ddd'} />
              </Button>
            </Tooltip>

            <Button backgroundColor={'transparent'} h='50px' w='50px' borderRadius='50%' _hover={{ backgroundColor: isLight ? '#EEE' : '#55555550' }}
              onClick={() => toggleColorMode()}>
              {
                isLight ?
                  <BsMoonFill {...isLight ? ColorModeButtonStylesLight : ColorModeButtonStylesDark} />
                  :
                  <BsSun {...isLight ? ColorModeButtonStylesLight : ColorModeButtonStylesDark} />
              }
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
};
export default Header;