import { Flex, Switch, Text } from "@chakra-ui/react";
import { ChangeEvent } from "react";

type CustomSwitchProps = {
  valueOne: string,
  valueTwo: string,
  isDisabled: boolean,
  isChecked: boolean,
  changeHandler: (e: ChangeEvent<HTMLInputElement>) => void
};

const CustomSwitchWithValue = ({ valueOne, valueTwo, isDisabled, isChecked, changeHandler }: CustomSwitchProps) => {

  return (
    <>
      <Flex gap='.5em' alignItems='center'>
        <Text>{valueOne}</Text>
        <Switch
          isDisabled={!isDisabled}
          isChecked={isChecked}
          value={isChecked ? valueOne : valueTwo}
          onChange={e => changeHandler(e)}
        />
        <Text>{valueTwo}</Text>
      </Flex>
    </>
  )
};
export default CustomSwitchWithValue;