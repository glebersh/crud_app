import { AddUserFormInputDefaultStyles } from '@/styles/additionalStyles';
import { Box, FormLabel, Input } from '@chakra-ui/react';
import { ChangeEvent } from 'react';

type AddUserFormInputProps = {
  label: string,
  id: string,
  name: string,
  value: string | number
  changeHandler: (e: ChangeEvent) => void,
  placeholder?: string,
  inputError: string | undefined
};

const AddUserFormInput = (props: AddUserFormInputProps) => {
  const { id, name, changeHandler, value, label, placeholder, inputError } = props;

  return (
    <Box>
      <FormLabel htmlFor={id}
        color={inputError ? 'red' : 'inherit'}
      >
        {inputError ? inputError : label}
      </FormLabel>
      <Input
        _placeholder={{ color: '#aaa' }}
        placeholder={placeholder}
        type="text"
        required
        value={value}
        focusBorderColor={'accentOne'}
        id={id}
        name={name}
        onChange={e => changeHandler(e)}
        {...AddUserFormInputDefaultStyles}
        borderColor={inputError ? 'red' : '#ddd'}
      />
    </Box>
  )
};
export default AddUserFormInput;