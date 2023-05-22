import { Box, Button, Flex, Image, Text } from '@chakra-ui/react';
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';


const AdminInfo = () => {
  const session = useSession();
  console.log(session);
  return (
    <>
      {
        session.status === 'authenticated'
          ?
          <Flex alignItems='center' gap='1em' mr='3em'>
            <Image
              src={session?.data?.user?.image ? session?.data?.user?.image
                :
                `https://ui-avatars.com/api/?name=${session.data?.user?.name?.split(' ')[0]}+${session.data?.user?.name?.split(' ')[1]}`}
              w='46px'
              h='46px'
              borderRadius='50%' />
            <Box>
              <Text>{session ? session.data?.user?.name : ''}</Text>
              <Text color='#999'>{session ? session.data?.user?.email : ''}</Text>
              <Button variant={'link'} onClick={() => signOut()}>Log out</Button>
            </Box>
          </Flex >
          :
          <Text color='#999' mr='3em'>Please sign in</Text>
      }
    </>
  )
};
export default AdminInfo;