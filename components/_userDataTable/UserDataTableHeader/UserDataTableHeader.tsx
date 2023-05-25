import { Box, Flex, Text } from "@chakra-ui/react";
import FilterTagsList from "../FilterTagsList";
import PaginationBlock from "../PaginationBlock";

const UserDataTableHeader = ({ totalUsers }: { totalUsers: number }) => {
  return (
    <>
      <Flex alignItems='center' justifyContent='flex-start' p='0 0 1em 0' w='90%' m='0 auto'>
        <Text fontSize='1.5em' fontWeight={700}>List of all users</Text>
        <Box ml='5em'>
          <FilterTagsList />
        </Box>
        <Box ml='auto'>
          <PaginationBlock totalUsers={totalUsers} />
        </Box>
      </Flex>
    </>
  )
};
export default UserDataTableHeader;