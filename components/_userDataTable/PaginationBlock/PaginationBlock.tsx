import { useAppDispatch } from "@/store/hooks/useAppDispatch";
import { paginationDataSelector } from "@/store/selectors";
import { setPage } from "@/store/slices/paginationSlice";
import { Flex, Button } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { useSelector } from "react-redux";

const PaginationBlock = React.memo(({ totalUsers }: { totalUsers: number }) => {
  const { limit: _limit, pageNumber: _pageNum } = useSelector(paginationDataSelector);

  const _btnsMax = 5;
  const dispatch = useAppDispatch();

  const shouldRenderButtons = _pageNum - 1 + _btnsMax < Math.ceil(totalUsers / _limit);
  const maxSliceValue = shouldRenderButtons ? _pageNum - 1 + _btnsMax : Math.ceil(totalUsers / _limit);
  const minSliceValue = shouldRenderButtons ? _pageNum - 1 : maxSliceValue - _btnsMax;

  const createRange = (min: number, max: number): number[] => {
    const result = [];
    for (let j = min + 1; j <= max; j++) {
      result.push(j);
    }
    return result;
  };

  const [range, setRange] = useState<number[]>([1, 2, 3, 4, 5]);

  useEffect(() => {
    if (_pageNum % 5 === 1) {
      setRange(createRange(minSliceValue, maxSliceValue));
    }

    if ((totalUsers / _limit) < 5) {
      setRange(createRange(0, Math.ceil(totalUsers / _limit)));
    } else {
      setRange(createRange(minSliceValue, maxSliceValue));
    }

    if (Math.ceil(totalUsers / _limit) < _pageNum) {
      dispatch(setPage(Math.ceil(totalUsers / _limit)));
    }

  }, [_pageNum, _limit, totalUsers]);


  return (
    <Flex gap='.5em' alignItems='center'>
      <Button onClick={() => {
        dispatch(setPage(_pageNum - 1));
      }}
        variant={'outline'}
        isDisabled={_pageNum === 1} fontSize='1.5em' borderColor='transparent'>
        <BsArrowLeftShort />
      </Button>
      {
        range.map((val, index: number) =>
          <Button onClick={() => {
            dispatch(setPage(val));
          }}
            variant={'outline'}
            key={index}
            isDisabled={_pageNum === val}
            textDecoration={_pageNum === val ? 'underline' : ''}
            borderColor={_pageNum === val ? 'accentOne' : 'transparent'}
            w='40px'>
            {val}
          </Button>)
      }
      <Button onClick={() => {
        dispatch(setPage(_pageNum + 1));
      }}
        variant={'outline'}
        isDisabled={_pageNum === Math.ceil(totalUsers / _limit)} fontSize='1.5em' borderColor='transparent'>
        <BsArrowRightShort />
      </Button>
    </Flex >
  )
});

PaginationBlock.displayName = 'PaginationBlock';

export default PaginationBlock;