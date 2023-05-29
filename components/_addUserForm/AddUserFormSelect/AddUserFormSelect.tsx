import { AddUserFormInputDefaultStyles } from "@/styles/additionalStyles";
import { Box, FormLabel, Select } from "@chakra-ui/react";
import { ChangeEvent } from "react";

type UserFormSelectProps = {
    changeHandler: (e?: ChangeEvent<HTMLSelectElement>) => void,
    value?: string,
    id: string,
    label: string,
    options: { title: string, value: string | number }[],
    name: string
};

const AddUserFormSelect = (props: UserFormSelectProps) => {
    const { options, label, id, value, changeHandler, name } = props;

    return (
        <Box>
            <FormLabel htmlFor={id}>{label}</FormLabel>
            <Select
                value={value ? value : 'default'}
                focusBorderColor={'accentOne'}
                id={id}
                name={name}
                onChange={changeHandler}
                {...AddUserFormInputDefaultStyles}>
                <option value='default' disabled>Choose an option</option>
                {
                    options.map(option =>
                        <option style={{ backgroundColor: 'white' }}
                            value={option.value}
                            key={option.value}>
                            {option.title}
                        </option>
                    )
                }
            </Select>
        </Box>
    )
};

export default AddUserFormSelect