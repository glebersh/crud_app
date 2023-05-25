import { RootState } from "@/store";
import { Flex, Switch, Text } from "@chakra-ui/react";
import { ChangeEvent } from "react";
import { useSelector } from "react-redux";

type CustomSwitchProps = {
  valueOne: string,
  valueTwo: string,
  isDisabled: boolean,
  isChecked: boolean,
  changeHandler: (e: ChangeEvent<HTMLInputElement>) => void
};

const CustomSwitchWithValue = ({ valueOne, valueTwo, isDisabled, isChecked, changeHandler }: CustomSwitchProps) => {
  const filtersState = useSelector((state: RootState) => state.clientReducer.filters.mapFilters);

  return (
    <>
      <Flex gap='.5em' alignItems='center'>
        <Text>{valueOne}</Text>
        <Switch
          isDisabled={!isDisabled}
          isChecked={filtersState.sex === 'female'}
          value={isChecked ? 'male' : 'female'}
          onChange={e => changeHandler(e)}
        />
        <Text>{valueTwo}</Text>
      </Flex>
    </>
  )
};
export default CustomSwitchWithValue;