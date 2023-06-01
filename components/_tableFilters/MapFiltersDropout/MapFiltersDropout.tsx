import { useBackgroundColor } from "@/hooks/useBackgroundColor";
import { useAppDispatch } from "@/store/hooks/useAppDispatch";
import { addMapFilter } from "@/store/slices/filtersSlice";
import { Flex, Slider, SliderFilledTrack, SliderThumb, SliderTrack } from "@chakra-ui/react";
import { useReducer, useState } from "react";
import { useSelector } from "react-redux";
import CustomSwitchWithValue from "../SwitchWithValue/SwitchWithValue";
import CheckboxWithLabel from "../CheckboxWithLabel/CheckboxWithLabel";
import { mapFiltersSelector } from "@/store/selectors";

const FiltersDropoutMenu = () => {

  const initialState = {
    status: false,
    gender: false,
    salary: false,
  };

  const defaultValues = {
    status: 'active',
    gender: 'male',
    salary: 50000,
  };

  const disableReducer = (state: typeof initialState, action: { field: string, payload: boolean }) => {
    return { ...state, [action.field]: action.payload };
  };

  const [isDisabled, disableDispatch] = useReducer(disableReducer, initialState);
  const [isChecked, setIsChecked] = useState({ status: false, gender: false });

  const sliceDispatch = useAppDispatch();
  const filtersState = useSelector(mapFiltersSelector);

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
      <Flex borderRadius='15px' direction='column' id='filters_dropout_menu'
        backgroundColor={bgColor}>

        <Flex direction='column' borderBottom='1px solid #aaa' p='1em'>
          <CheckboxWithLabel changeHandler={() => disableHandler('status')} label='Status' isChecked={isDisabled.status} />
          <CustomSwitchWithValue
            valueOne="active"
            valueTwo="inactive"
            isChecked={isChecked.status}
            isDisabled={isDisabled.status}
            changeHandler={e => {
              setIsChecked({ ...isChecked, status: !isChecked.status });
              sliceDispatch(addMapFilter({ ...filtersState, status: e.target.value }));
              setPreviousState({ ...filtersState, status: e.target.value });
            }} />
        </Flex>

        <Flex direction='column' borderBottom='1px solid #aaa' p='1em'>
          <CheckboxWithLabel changeHandler={() => disableHandler('gender')} label='Gender' isChecked={isDisabled.gender} />
          <CustomSwitchWithValue
            valueOne="male"
            valueTwo="female"
            isChecked={isChecked.gender}
            isDisabled={isDisabled.gender}
            changeHandler={e => {
              setIsChecked({ ...isChecked, gender: !isChecked.gender });
              sliceDispatch(addMapFilter({ ...filtersState, gender: e.target.value }));
              setPreviousState({ ...filtersState, gender: e.target.value });
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