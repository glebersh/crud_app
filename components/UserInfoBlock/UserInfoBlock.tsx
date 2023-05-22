import { MongoDBUserModel } from "@/types";
import { Box, Flex, Image, Text, useColorModeValue } from "@chakra-ui/react";
import UserLinksBlock from "../UserLinksBlock";

const UserInfoBlock = ({ user }: { user: MongoDBUserModel }) => {
  const { _id, name, email, salary, birth_date, status, sex, avatar_img_URL } = user;
  const bgColor = useColorModeValue('white', '#1a1a1a');

  return (
    <Flex backgroundColor={bgColor} m='2em auto' p='2em' w='80%' borderRadius='.35em'>
      <Flex>
        <Image src={avatar_img_URL} w='240px' h='240px' />
        <Flex gap='1em'>
          <Box>
            <Box mt='1em'>
              <Text color='#888'>Name</Text>
              <Text>{name}</Text>
              <Text color='#888'>About</Text>
              <Text>Lorem ipsum Lorem ipsum Lorem ipsum </Text>
            </Box>
            <Box mt='1em'>
              <Text color='#888'>Email</Text>
              <Text>
                <a href={`mailto:${email}`}>
                  {email}
                </a>
              </Text>
            </Box>
            <Box mt='1em'>
              <Text color='#888'>Sex</Text>
              <Text>{sex.slice(0, 1).toUpperCase() + sex.slice(1)}</Text>
            </Box>
          </Box>
          <Box>
            <Box mt='1em'>
              <Text color='#888'>Birth Date</Text>
              <Text>{birth_date}</Text>
            </Box>
            <Box mt='1em'>
              <Text color='#888'>Salary</Text>
              <Text>{salary}</Text>
            </Box>
            <Box mt='1em'>
              <Text color='#888'>Status</Text>
              <Flex
                backgroundColor={status === 'active' ? 'green.300' : 'red.400'}
                borderRadius='.15em'
                textTransform='uppercase'
                alignItems='center'
                justifyContent='center'>
                {status}
              </Flex>
            </Box>
          </Box>
        </Flex>
      </Flex>
      <Box>
        <Text color='#888'>More</Text>
        <UserLinksBlock />
      </Box>
    </Flex>
  )
};
export default UserInfoBlock;