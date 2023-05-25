import { CustomSearchbar, CustomSelect } from "@/UI";
import { limitSelectOptions } from "@/consts";
import { useToggleFormAdd } from "@/hooks";
import { useAppDispatch } from "@/store/hooks/useAppDispatch";
import { paginationDataSelector } from "@/store/selectors";
import { setLimit, setSearchValue } from "@/store/slices/clientSlice";
import { ButtonDefaultStyles, LoginButtonStyles } from "@/styles/additionalStyles";
import { AddIcon } from "@chakra-ui/icons";
import { Box, Button, FormLabel } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import FiltersDropoutMenu from "../MapFiltersDropout";
import { useState } from "react";

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
          changeHandler={(val: number) => dispatch(setLimit(val))} _pageLimit={_pageLimit} />
      </Box>
      <Box w='50%'>
        <CustomSearchbar changeHandler={(val: string) => dispatch(setSearchValue(val))} />
      </Box>
      <Box position='relative'>
        <Button {...ButtonDefaultStyles}
          onClick={() => setDropoutVisibility(!isDropoutVisible)}>
          Filters
          <i className="bi bi-filter-left" style={{ fontSize: '1.25em', marginLeft: '1em' }}></i>
        </Button>
        <Box position='absolute' zIndex={888} display={isDropoutVisible ? 'block' : 'none'}>
          <FiltersDropoutMenu />
        </Box>
      </Box>
      <Button onClick={formVisibilityHandler} {...LoginButtonStyles} leftIcon={<AddIcon w='15px' />}>Add user</Button>
    </>
  )
};
export default TableFiltersWrapper;