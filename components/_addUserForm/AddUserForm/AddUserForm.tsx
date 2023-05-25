import CustomChakraFlex from "@/UI/CustomChakraFlex";
import { RootState } from "@/store";
import { DefaultWrapperStyles, AddUserFormInputDefaultStyles, AddUserFormInputErrorStyles, ButtonDefaultStyles } from "@/styles/additionalStyles";
import { Input, Select, FormLabel, Radio, useColorModeValue, Box, Flex, Textarea } from "@chakra-ui/react";
import { ChangeEvent, FormEvent } from 'react';
import { useSelector } from "react-redux";
import AddUserFormInput from "../AddUserFormInput/AddUserFormInput";
import FormTitle from "../FormTitle/FormTitle";
import { useBackgroundColor } from "@/hooks/useBackgroundColor";

const AddUserForm = ({ updateInputHandler, onSubmit }: { updateInputHandler: (e: ChangeEvent) => void, onSubmit: (e: FormEvent<HTMLFormElement>) => void }) => {
  const formSelectOptions = [{ title: 'Male', value: 'male' }, { title: 'Female', value: 'female' }];

  const formData = useSelector((state: RootState) => state.clientReducer.formData);
  const isValidationFailed = useSelector((state: RootState) => state.clientReducer.formValidation.validatedInputs);
  const bg = useBackgroundColor();
  const btnBgc = useColorModeValue('accentOne', 'accentOne');


  return (
    <form onSubmit={e => onSubmit(e)}>
      <Flex direction='column' alignItems='center' {...DefaultWrapperStyles} p='2em 0' backgroundColor={bg}>

        <FormTitle />

        <Flex m='0 auto' w='100%' direction='row' justifyContent='space-evenly'>
          <Box w='35%'>

            <AddUserFormInput formData={formData} isValidated={isValidationFailed} name="first_name" id='first_name_input' changeHandler={updateInputHandler} />
            <AddUserFormInput formData={formData} isValidated={isValidationFailed} name="last_name" id='last_name_input' changeHandler={updateInputHandler} />

            <FormLabel htmlFor='sexParameter_select' m='1.5em 0 .5em'>Sex</FormLabel>
            <Select
              value={formData.sex}
              focusBorderColor={btnBgc}
              id='sexParameter_select'
              name='sex'
              onChange={e => updateInputHandler(e)}
              {...AddUserFormInputDefaultStyles}>
              <option value='default' disabled>Choose an option</option>
              {
                formSelectOptions.map(option =>
                  <option
                    value={option.value}
                    key={option.value}>
                    {option.title}
                  </option>
                )
              }
            </Select>

            <FormLabel htmlFor='birth_date_input' m='1.5em 0 .5em'>Birth Date</FormLabel>
            <Input
              type='date'
              required
              focusBorderColor={btnBgc}
              value={formData.birth_date}
              id='birth_date_input'
              name='birth_date'
              onChange={e => updateInputHandler(e)}
              {...AddUserFormInputDefaultStyles}
              {...!isValidationFailed.first_name ? AddUserFormInputErrorStyles : null}
            />
          </Box>

          <Box w='35%'>
            <AddUserFormInput formData={formData} isValidated={isValidationFailed} name="email" id='email_input' changeHandler={updateInputHandler} />
            <AddUserFormInput formData={formData} isValidated={isValidationFailed} name="salary" id='salary_input' changeHandler={updateInputHandler} />

            <CustomChakraFlex styles={{ flexDirection: 'column', alignItems: 'flex-start', gap: '1em' }}>
              <FormLabel m='1.5em 0 .5em'>Choose user status</FormLabel>
              <Flex gap='.5em'>
                <Radio name='status' value='active' size='lg'
                  isChecked={formData.status === 'active'}
                  colorScheme="blue"
                  onChange={e => updateInputHandler(e)}
                /> Active
              </Flex>
              <Flex gap='.5em'>
                <Radio name='status' value='inactive' size='lg'
                  colorScheme="blue"
                  isChecked={formData.status === 'inactive'}
                  onChange={e => updateInputHandler(e)}
                /> Inactive
              </Flex>
            </CustomChakraFlex>

          </Box>
        </Flex>
        {/* <Textarea w='80%' mt='3em' /> */}

        <Input type='submit' {...ButtonDefaultStyles} value='Submit' w='20%' m='2em auto 0' _hover={{ backgroundColor: btnBgc, cursor: 'pointer' }} />
      </Flex>
    </form>
  )
};


export default AddUserForm;