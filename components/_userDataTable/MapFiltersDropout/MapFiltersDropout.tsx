import { useBackgroundColor } from "@/hooks/useBackgroundColor";
import { RootState } from "@/store";
import { useAppDispatch } from "@/store/hooks/useAppDispatch";
import { addMapFilter } from "@/store/slices/clientSlice";
import { Checkbox, Flex, FormLabel, Slider, SliderFilledTrack, SliderThumb, SliderTrack, Switch, Text } from "@chakra-ui/react";
import { ChangeEvent, useEffect, useReducer, useState } from "react";
import { useSelector } from "react-redux";
import CustomSwitchWithValue from "../SwitchWithValue/SwitchWithValue";
import CheckboxWithLabel from "../CheckboxWithLabel/CheckboxWithLabel";

const FiltersDropoutMenu = () => {

  const initialState = {
    status: false,
    sex: false,
    salary: false,
  };

  const defaultValues = {
    status: 'active',
    sex: 'male',
    salary: 50000,
  };

  const disableReducer = (state: typeof initialState, action: { field: string, payload: boolean }) => {
    return { ...state, [action.field]: action.payload };
  };

  const [isDisabled, disableDispatch] = useReducer(disableReducer, initialState);
  const [isChecked, setIsChecked] = useState({ status: false, sex: false });

  const sliceDispatch = useAppDispatch();
  const filtersState = useSelector((state: RootState) => state.clientReducer.filters.mapFilters);

  const [previousState, setPreviousState] = useState(filtersState);

  const disableHandler = (field: string) => {
    const reducerField = field as keyof typeof filtersState;
    if (isDisabled[reducerField]) {
      const newState = { ...filtersState };
      reducerField === 'salary' ? newState[reducerField] = 0 : newState[reducerField] = '';
      sliceDispatch(addMapFilter({ ...newState }));
    } else if (!isDisabled[reducerField] && !(previousState[reducerField])) {
      sliceDispatch(addMapFilter({ ...filtersState, [reducerField]: defaultValues[reducerField] }));
    } else {
      const newState = { ...filtersState, [reducerField]: previousState[reducerField] };
      sliceDispatch(addMapFilter(newState));
    }

    disableDispatch({ field, payload: !isDisabled[reducerField] });
  };

  const bgColor = useBackgroundColor();

  return (
    <>
      <Flex borderRadius='15px' direction='column'
        backgroundColor={bgColor}
        boxShadow='rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'>

        <Flex direction='column' borderBottom='1px solid #aaa' p='1em'>
          <CheckboxWithLabel changeHandler={() => disableHandler('status')} label='Status' isChecked={isDisabled.status} />
          <CustomSwitchWithValue
            valueOne="Active"
            valueTwo="Inactive"
            isChecked={isChecked.status}
            isDisabled={isDisabled.status}
            changeHandler={e => {
              setIsChecked({ ...isChecked, status: !isChecked.status });
              sliceDispatch(addMapFilter({ ...filtersState, status: e.target.value }));
              setPreviousState({ ...filtersState, status: e.target.value });
            }} />
        </Flex>

        <Flex direction='column' borderBottom='1px solid #aaa' p='1em'>
          <CheckboxWithLabel changeHandler={() => disableHandler('sex')} label='Sex' isChecked={isDisabled.sex} />
          <CustomSwitchWithValue
            valueOne="Male"
            valueTwo="Female"
            isChecked={isChecked.sex}
            isDisabled={isDisabled.sex}
            changeHandler={e => {
              setIsChecked({ ...isChecked, sex: !isChecked.sex });
              sliceDispatch(addMapFilter({ ...filtersState, sex: e.target.value }));
              setPreviousState({ ...filtersState, sex: e.target.value });
            }} />
        </Flex>

        <Flex direction='column' p='1em'>
          <CheckboxWithLabel changeHandler={() => disableHandler('salary')} label='Salary' isChecked={isDisabled.salary} />
          <Flex gap='.5em' alignItems='center'>
            <Slider min={0} max={100000} isDisabled={!isDisabled.salary}
              value={filtersState.salary}
              onChange={val => {
                sliceDispatch(addMapFilter({ ...filtersState, salary: val }))
                setPreviousState({ ...filtersState, salary: val });
              }}>
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
          </Flex>
        </Flex>
      </Flex >
    </>
  )
};
export default FiltersDropoutMenu;