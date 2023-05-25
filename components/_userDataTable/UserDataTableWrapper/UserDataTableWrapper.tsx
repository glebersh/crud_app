import { useSelector } from "react-redux";
import UserDataTable from "../UserDataTable/";
import { Box, Flex, Spinner } from "@chakra-ui/react";
import { filtersSelector, paginationDataSelector } from "@/store/selectors";
import { useGetUsers } from "@/hooks/";
import { useFilterUsers } from "@/hooks/useFilterUsers";
import FiltersDropoutMenu from "../MapFiltersDropout/MapFiltersDropout";
import { useBackgroundColor } from "@/hooks/useBackgroundColor";
import TableFiltersWrapper from "../TableFiltersWrapper";

const UserDataTableWrapper = () => {
  const { limit: _pageLimit, pageNumber: _pageNum } = useSelector(paginationDataSelector);
  const { columnSort: sortValue, searchFilterValue: searchQ } = useSelector(filtersSelector);
  const skip = _pageLimit * (_pageNum - 1);
  const filterFunc = useFilterUsers();
  const { data: usersData, isLoading, isError, isSuccess, isFetching } = useGetUsers(sortValue, searchQ, filterFunc);

  const bgColor = useBackgroundColor();


  return (
    <Box>
      <Flex w='70%' m='2em auto'
        alignItems='flex-end'
        justifyContent='space-evenly'
        borderRadius='15px'
        p='1em 0 2.5em 0'
        backgroundColor={bgColor}
        boxShadow='rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'>

        <TableFiltersWrapper />

      </Flex>
      <Flex direction='column' alignItems='center'>
        {isLoading && <Spinner w='150px' h='150px' color='accentOne' />}
        {
          !isLoading && !isError && <UserDataTable isLoading={isLoading} isError={isError}
            usersData={usersData.users.slice(skip, skip + _pageLimit)} totalUsers={usersData.count ? usersData.count : 1} />
        }
      </Flex>
    </Box>
  )
};
export default UserDataTableWrapper;