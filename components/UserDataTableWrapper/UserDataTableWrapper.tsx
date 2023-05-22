import { useAppDispatch } from "@/store/hooks/useAppDispatch";
import { useSelector } from "react-redux";
import PaginationBlock from "../PaginationBlock/";
import CustomSelect from "@/UI/CustomSelect/";
import { setLimit, setSearchValue } from "@/store/slices/clientSlice";
import UserDataTable from "../UserDataTable/";
import { Box, Button, Flex, FormLabel, Spinner, Text } from "@chakra-ui/react";
import { ButtonDefaultStyles } from "@/styles/additionalStyles";
import { AddIcon } from "@chakra-ui/icons";
import { filtersSelector, paginationDataSelector } from "@/store/selectors";
import { useGetUsers, useToggleFormAdd } from "@/hooks/";
import { limitSelectOptions } from "@/consts";
import { CustomSearchbar } from "@/UI";

const UserDataTableWrapper = () => {
  const { limit: _pageLimit, pageNumber: _pageNum } = useSelector(paginationDataSelector);
  const { columnSort: sortValue, searchFilterValue: searchQ } = useSelector(filtersSelector);
  const dispatch = useAppDispatch();
  const skip = _pageLimit * (_pageNum - 1);
  const { data: usersData, isLoading, isError, isSuccess, isFetching } = useGetUsers(sortValue, searchQ);
  const formVisibilityHandler = useToggleFormAdd();

  return (
    <>
      <Flex w='80%' m='2em auto' alignItems='center' justifyContent='space-between'>
        <Box w='50%' mr='auto'>
          <FormLabel>Limit per page</FormLabel>
          <CustomSelect options={limitSelectOptions} changeHandler={(val: number) => dispatch(setLimit(val))} _pageLimit={_pageLimit} />
        </Box>
        <CustomSearchbar changeHandler={(val: string) => dispatch(setSearchValue(val))} />
        <Flex m='0 auto' flex='1' gap='1em' alignItems='center'>
          {isFetching && !isLoading && <Text color='darkgray'>Fetching...</Text>}
          {isFetching && !isLoading && <Spinner color='darkgray' />}
        </Flex>
        <Button onClick={formVisibilityHandler} {...ButtonDefaultStyles} leftIcon={<AddIcon w='10px' />}>Add user</Button>
      </Flex>
      <Flex direction='column' alignItems='center'>
        {isLoading && <Spinner w='150px' h='150px' color='accentOne' />}
        {
          !isLoading && !isError && <UserDataTable isLoading={isLoading} isError={isError}
            usersData={usersData.users.slice(skip, skip + _pageLimit)} />
        }
        {isSuccess && <PaginationBlock totalUsers={usersData.count ? usersData.count : 1} />}
      </Flex>
    </>
  )
};
export default UserDataTableWrapper;