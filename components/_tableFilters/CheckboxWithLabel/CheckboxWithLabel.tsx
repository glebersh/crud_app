import { Checkbox, Flex, FormLabel } from "@chakra-ui/react";
import { ChangeEvent } from "react";

type CheckboxWithLabelProps = {
  changeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  label: string,
  isChecked?: boolean
};

const CheckboxWithLabel = ({ changeHandler, label, isChecked }: CheckboxWithLabelProps) => {
  return (
    <>
      <Flex alignItems='center'>
        <FormLabel>{label}</FormLabel>
        <Checkbox onChange={e => changeHandler(e)} isChecked={isChecked ? isChecked : false} />
      </Flex>
    </>
  )
};
export default CheckboxWithLabel;