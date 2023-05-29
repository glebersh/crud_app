import { useAppDispatch } from "@/store/hooks/useAppDispatch";
import { columnSortSelector } from "@/store/selectors";
import { setColumnSort } from "@/store/slices/formSlice";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { Flex, useColorModeValue } from "@chakra-ui/react";
import { useSelector } from "react-redux";

const TableHeaderItem = ({ label }: { label: string }) => {

  const chevronIconCol = useColorModeValue('black', 'white');
  const dispatch = useAppDispatch();
  const columnSortValue = useSelector(columnSortSelector);


  const setSort = () => {
    if (columnSortValue === 'none') {
      dispatch(setColumnSort(`${label}.up`));
    } else if (columnSortValue.split('.')[1] === 'up') {
      dispatch(setColumnSort(`${label}.down`));
    } else {
      dispatch(setColumnSort(`none`));
    }

    if (columnSortValue.split('.')[0] !== label) {
      dispatch(setColumnSort(`${label}.up`));
    }
  };


  return (
    <th style={{ fontWeight: '400' }} align='left'>
      <Flex alignItems='center'>
        {label}
        {
          columnSortValue === `${label}.up` ?
            <ChevronDownIcon
              _hover={{ color: chevronIconCol, cursor: 'pointer' }}
              color='transparent'
              fontSize={'2em'}
              transition='all .33s'
              onClick={setSort} /> : null
        }
        {
          columnSortValue === `${label}.down` || columnSortValue === 'none' || columnSortValue.split('.')[0] !== label ?
            <ChevronUpIcon
              _hover={{ color: chevronIconCol, cursor: 'pointer' }}
              color='transparent'
              fontSize={'2em'}
              transition='all .33s'
              onClick={setSort} /> : null
        }
      </Flex>
    </th>
  )
};
export default TableHeaderItem;