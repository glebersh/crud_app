import { AddUserFormInputDefaultStyles, AddUserFormInputErrorStyles } from '@/styles/additionalStyles';
import { FormDataType, FormValidationResult } from '@/types';
import { FormLabel, Input } from '@chakra-ui/react';
import { ChangeEvent } from 'react';
import { useColorModeValue } from '@chakra-ui/react';

type AddUserFormInputProps = {
  formData: FormDataType,
  id: string,
  name: string,
  isValidated: FormValidationResult,
  changeHandler: (e: ChangeEvent) => void
};

const AddUserFormInput = (props: AddUserFormInputProps) => {

  const { id, name, formData, changeHandler, isValidated } = props;

  let validationKey: keyof FormValidationResult = name as keyof FormValidationResult;
  let formDataKey: keyof FormDataType = name as keyof FormDataType;


  const validationResult: boolean = isValidated[validationKey];
  const value = formData[formDataKey];

  const label = name.split('_');
  const inputLabel = label.length === 1 ?
    `${name[0].toUpperCase()}${label[0].slice(1)}`
    :
    `${name[0].toUpperCase()}${label[0].slice(1)} ${label[1].toUpperCase().slice(0, 1)}${label[1].slice(1)}`;

  const errorLabel = name !== 'salary' ? `${inputLabel} input should contains only letters` : `Salary input should contains only numbers`;
  const inputFocBorCol = useColorModeValue('accentOne', 'accentOne');

  return (
    <>
      <FormLabel htmlFor={id} m='1.5em 0 .5em' color={validationResult ? 'inherit' : 'red'}>{validationResult ? inputLabel : errorLabel}</FormLabel>
      <Input
        type="text"
        required
        value={value}
        focusBorderColor={inputFocBorCol}
        id={id}
        name={name}
        onChange={e => changeHandler(e)}
        {...AddUserFormInputDefaultStyles}
        {...!validationResult ? AddUserFormInputErrorStyles : null}
      />
    </>
  )
};
export default AddUserFormInput;