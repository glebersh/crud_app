import { DefaultWrapperStyles, AddUserFormInputDefaultStyles, ButtonDefaultStyles } from "@/styles/additionalStyles";
import { Input, FormLabel, Radio, Box, Flex } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import AddUserFormInput from "../AddUserFormInput/";
import FormTitle from "../FormTitle/";
import { useBackgroundColor, useAddForm } from "@/hooks/";
import { formSelectDeparmentOptions, formSelectGenderOptions } from "@/consts";
import { FormDataType } from "@/types";
import { formDataSelector } from "@/store/selectors";
import AddFormSectionHeader from "../AddFormSectionHeader/";
import AddUserFormSelect from "../AddUserFormSelect/";
import AddUserFormTextarea from "../AddUserFormTextarea/";
import AddUserFormRadio from "../AddUserFormRadio";
import { BsFileEarmarkPerson, BsFileEarmarkPersonFill, BsInfoSquare, BsTelephoneFill, BsUiChecks } from "react-icons/bs";
import { AiOutlineContacts } from "react-icons/ai";
import { GrContactInfo } from "react-icons/gr";

type AddFormProps = {
  submitHandler: (values: FormDataType) => void
};

const AddUserForm = ({ submitHandler }: AddFormProps) => {
  const bg = useBackgroundColor();
  const formData = useSelector(formDataSelector);
  const addFormik = useAddForm(formData, submitHandler);

  return (
    <form
      // onSubmit={e => e.preventDefault()}
      onSubmit={addFormik.handleSubmit}
    >
      <Flex direction='column' alignItems='center' {...DefaultWrapperStyles} p='1em 0' backgroundColor={bg}>

        <FormTitle />

        <Flex w='80%' direction='column' m='0 auto' gap='1em'>
          <AddFormSectionHeader
            icon={<BsFileEarmarkPerson />}
            label="Personal Details" />
          <Flex>
            <Flex direction="column" w='42%' gap='1em'>
              <AddUserFormInput
                inputError={addFormik.errors.first_name}
                label='First name'
                value={addFormik.values.first_name}
                name="first_name"
                id='first_name_input'
                changeHandler={addFormik.handleChange}
              />
              <AddUserFormInput
                inputError={addFormik.errors.last_name}
                label='Last name'
                value={addFormik.values.last_name}
                name="last_name"
                id='last_name_input'
                changeHandler={addFormik.handleChange}
              />
            </Flex>

            <Flex direction="column" w='42%' ml='auto'>
              <AddUserFormSelect
                label='Gender'
                id='gender_form_select'
                name='gender'
                changeHandler={addFormik.handleChange}
                value={addFormik.values.gender}
                options={formSelectGenderOptions}
              />

              <FormLabel htmlFor='birth_date_input' mt='1em'>Birth Date</FormLabel>
              <Input
                value={addFormik.values.birth_date}
                type='date'
                required
                focusBorderColor={'accentOne'}
                id='birth_date_input'
                name='birth_date'
                onChange={addFormik.handleChange}
                {...AddUserFormInputDefaultStyles}
              />
            </Flex>
          </Flex>
        </Flex>

        <Flex w='80%' direction='column' m='1.5em auto 0' gap='1em'>
          <AddFormSectionHeader icon={<AiOutlineContacts />} label="Contact Details" />
          <Flex>
            <Box w='42%'>
              <AddUserFormInput
                inputError={addFormik.errors.email}
                label='Email' placeholder="e.g. johnwick@example.com"
                value={addFormik.values.email}
                name="email" id='email_input'
                changeHandler={addFormik.handleChange} />
            </Box>
            <Flex direction="column" w='42%' ml='auto'>
              <FormLabel
                color={addFormik.errors.phone ? 'red' : 'inherit'}
              >{addFormik.errors.phone ? addFormik.errors.phone : 'Phone'}</FormLabel>
              <Input type='tel'
                focusBorderColor="accentOne"
                value={addFormik.values.phone}
                name="phone" id='phone_input'
                onChange={addFormik.handleChange}
                {...AddUserFormInputDefaultStyles} />
            </Flex>
          </Flex>
        </Flex>

        <Flex w='80%' direction='column' m='1.5em auto 0' gap='1em'>
          <AddFormSectionHeader icon={<BsUiChecks />} label="Job Details" />
          <Flex>
            <Flex w='42%' direction='column' gap='1em'>
              <AddUserFormSelect
                label='Department'
                id='department_form_select'
                name='department'
                changeHandler={addFormik.handleChange}
                value={addFormik.values.department}
                options={formSelectDeparmentOptions}
              />
              <AddUserFormInput
                inputError={addFormik.errors.salary}
                label='Salary'
                value={addFormik.values.salary}
                name="salary" id='salary_input'
                changeHandler={addFormik.handleChange} />
            </Flex>
            <Flex direction="column" w='42%' ml='auto'>
              <AddUserFormInput
                inputError={addFormik.errors.desiredPosition}
                label='Desired position'
                value={addFormik.values.desiredPosition}
                name="desiredPosition"
                id='desired_position_input'
                changeHandler={addFormik.handleChange}
              />
              <AddUserFormRadio
                formLabel="Select user status"
                valueOne='active' valueTwo='inactive'
                labelOne='Active' labelTwo='Inactive'
                changeHandler={addFormik.handleChange}
                formValue={addFormik.values.status}
                name='status' />
            </Flex>
          </Flex>
        </Flex>

        <Box w='80%' m='1.5em auto'>
          <AddFormSectionHeader icon={<BsInfoSquare />} label="Additional Info" />
          <Box mt='1em'>
            <AddUserFormTextarea
              label='About'
              id='about_textarea'
              name='about'
              changeHandler={addFormik.handleChange}
              value={addFormik.values.about} />
          </Box>
        </Box>
        <Input type='submit' {...ButtonDefaultStyles} value='Submit' w='20%' m='.5em auto 0'
          _hover={{ backgroundColor: 'accentOne', cursor: 'pointer' }} />
      </Flex>
    </form>
  )
};

export default AddUserForm;