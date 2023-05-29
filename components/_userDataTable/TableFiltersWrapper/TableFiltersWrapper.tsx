import { CustomSearchbar, CustomSelect } from "@/UI";
import { limitSelectOptions } from "@/consts";
import { useToggleFormAdd } from "@/hooks";
import { useAppDispatch } from "@/store/hooks/useAppDispatch";
import { paginationDataSelector } from "@/store/selectors";
import { setLimit } from "@/store/slices/paginationSlice";
import { setSearchValue } from "@/store/slices/filtersSlice";
import { ButtonDefaultStyles, LoginButtonStyles } from "@/styles/additionalStyles";
import { AddIcon } from "@chakra-ui/icons";
import { Box, Button, FormLabel } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import FiltersDropoutMenu from "@/components/_tableFilters/MapFiltersDropout";
import { useState } from "react";
import { BsFilterLeft } from "react-icons/bs";

const TableFiltersWrapper = () => {
  const dispatch = useAppDispatch();
  const formVisibilityHandler = useToggleFormAdd();
  const { limit: _pageLimit, pageNumber: _pageNum } = useSelector(paginationDataSelector);
  const [isDropoutVisible, setDropoutVisibility] = useState<boolean>(false);

  return (
    <>
      <Box>
        <FormLabel>Limit per page</FormLabel>
        <CustomSelect options={limitSelectOptions}
          changeHandler={val => dispatch(setLimit(parseInt(val)))} _pageLimit={_pageLimit} />
      </Box>
      <Box w='50%'>
        <CustomSearchbar changeHandler={(val: string) => dispatch(setSearchValue(val))} />
      </Box>
      <Box position='relative'>
        <Button {...ButtonDefaultStyles}
          onClick={() => setDropoutVisibility(!isDropoutVisible)}>
          Filters
          <BsFilterLeft style={{ fontSize: '1.25em', marginLeft: '1em' }} />
        </Button>
        <Box position='absolute' zIndex={888} display={isDropoutVisible ? 'block' : 'none'} mt='1em'>
          <FiltersDropoutMenu />
        </Box>
      </Box>
      <Button onClick={formVisibilityHandler} {...LoginButtonStyles} leftIcon={<AddIcon w='15px' />}>Add user</Button>
    </>
  )
};
export default TableFiltersWrapper;