import { AddUserFormInputDefaultStyles } from "@/styles/additionalStyles";
import { Box, FormLabel, Text, Textarea } from "@chakra-ui/react";
import { ChangeEvent } from "react";

type FormTextareaProps = {
    optional?: boolean,
    placeholder?: string,
    changeHandler: (e?: ChangeEvent<HTMLTextAreaElement>) => void,
    name: string,
    id: string,
    value?: string,
    label: string
};

const AddUserFormTextarea = (props: FormTextareaProps) => {
    const { optional, placeholder, changeHandler, name, id, value, label } = props;
    return (
        <Box>
            <FormLabel>{label}
                {
                    optional
                    &&
                    <Text display='inline-block' color='#aaaaaa'>(Optional)</Text>
                }
            </FormLabel>
            <Textarea
                placeholder={placeholder}
                _placeholder={{ color: '#aaa' }}
                maxH='200px'
                focusBorderColor="accentOne"
                value={value}
                name={name} id={id}
                onChange={changeHandler}
                {...AddUserFormInputDefaultStyles} />
        </Box>
    )
};

export default AddUserFormTextarea