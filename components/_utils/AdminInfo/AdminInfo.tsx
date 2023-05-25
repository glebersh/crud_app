import { LoginButtonStyles } from '@/styles/additionalStyles';
import { Box, Button, Flex, Image, Text, useColorMode } from '@chakra-ui/react';
import { useSession, signOut } from 'next-auth/react';

const AdminInfo = () => {
  const session = useSession();

  const { colorMode } = useColorMode();
  const isLight = colorMode === 'light';

  const avatarURL = `https://ui-avatars.com/api/?name=
  ${session.data?.user?.name?.split(' ')[0]}+
  ${session.data?.user?.name?.split(' ')[1]}
  &background=${isLight ? 'EEE' : '333'}&color=${isLight ? 'aaa' : 'bbb'}`;
  console.log(session);

  return (
    <>
      {
        session.status === 'authenticated'
          ?
          <Flex alignItems='center' gap='1em' mr='3em'>
            <Flex gap='1em' alignItems='center'>
              <Image
                src={session?.data?.user?.image ? session.data.user.image
                  :
                  avatarURL
                }
                w='50px'
                h='50px'
                borderRadius='50%' />

              <Box>
                <Text>{session ? session.data?.user?.name : ''}</Text>
                <Text color='#999'>{session ? session.data?.user?.email : ''}</Text>
              </Box>

              <Button {...LoginButtonStyles} onClick={() => signOut()} ml='1em'>Log out</Button>

            </Flex>
          </Flex>
          :
          <Text color='#999' mr='3em'>Please sign in</Text>
      }
    </>
  )
};
export default AdminInfo;