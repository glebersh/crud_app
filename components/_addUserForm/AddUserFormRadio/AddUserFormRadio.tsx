import { Flex, FormLabel, Radio } from "@chakra-ui/react";
import { ChangeEvent } from "react";

type AddUserFormRadioProps = {
    changeHandler: (e?: ChangeEvent<HTMLInputElement>) => void,
    valueOne: string | number,
    valueTwo: string | number,
    labelOne: string,
    labelTwo: string,
    id?: string,
    name: string,
    formValue: string | number,
    formLabel: string
};

const AddUserFormRadio = (props: AddUserFormRadioProps) => {
    const { changeHandler, valueOne, valueTwo, labelOne, labelTwo, name, id, formValue, formLabel } = props;
    return (
        <>
            <FormLabel mt='1.5em'>{formLabel}</FormLabel>
            <Flex gap='2em'>
                <Flex gap='.5em'>
                    <Radio name={name} value='active' size='lg'
                        id={id}
                        isChecked={formValue === valueOne}
                        colorScheme="blue"
                        onChange={changeHandler}
                    /> {labelOne}
                </Flex>
                <Flex gap='.5em'>
                    <Radio name={name} value='inactive' size='lg'
                        id={id}
                        colorScheme="blue"
                        isChecked={formValue === valueTwo}
                        onChange={changeHandler}
                    /> {labelTwo}
                </Flex>
            </Flex>
        </>
    )
};

export default AddUserFormRadio
