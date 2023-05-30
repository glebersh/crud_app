import { LoginButtonStyles, LoginFormIconStyles } from "@/styles/additionalStyles";
import { Flex, Input, Spinner, Text } from "@chakra-ui/react";
import { useState } from "react";
import AuthFormInput from "../AuthFormInput";
import { useSignUp } from "@/hooks";
import { BsEyeFill, BsFillEyeSlashFill, BsFingerprint, BsMailbox2, BsPersonBoundingBox, BsPersonWorkspace } from "react-icons/bs";
import ProvidersBlock from "../ProvidersBlock";

const RegistrationForm = ({ successHandler }: { successHandler: () => void }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isConfirmVisible, setIsConfirmVisible] = useState<boolean>(false);

  const formikRegistration = useSignUp(successHandler);

  return (
    <form onSubmit={formikRegistration.handleSubmit}>
      <Flex alignItems='center' direction='column' w='50%' m='2em auto' gap='1.5em'>
        <Flex direction='column' alignItems='center'>
          <Flex alignItems='center' gap='1em'>
            <BsPersonWorkspace fontSize={'2em'} />
            <Text fontSize='3em'>Sign Up</Text>
          </Flex>
        </Flex>

        <AuthFormInput
          inputError={formikRegistration.errors.first_name}
          label='First Name'
          id='first_name'
          name='first_name'
          icon={<BsPersonBoundingBox {...LoginFormIconStyles} />}
          type='text'
          changeHandler={formikRegistration.handleChange} />

        <AuthFormInput
          inputError={formikRegistration.errors.last_name}
          label='Last Name'
          id='last_name'
          name='last_name'
          icon={<BsPersonBoundingBox {...LoginFormIconStyles} />}
          type='text'
          changeHandler={formikRegistration.handleChange} />

        <AuthFormInput
          inputError={formikRegistration.errors.email}
          label='Email'
          id='email'
          name='email'
          icon={<BsMailbox2 {...LoginFormIconStyles} />}
          type='email'
          changeHandler={formikRegistration.handleChange} />

        <AuthFormInput
          inputError={formikRegistration.errors.password}
          label='Password'
          id='sign_up_password'
          name='password'
          icon={
            <>
              {!isVisible ?
                <BsEyeFill onClick={() => setIsVisible(!isVisible)} {...LoginFormIconStyles} />
                :
                <BsFillEyeSlashFill onClick={() => setIsVisible(!isVisible)} {...LoginFormIconStyles} />}
              <BsFingerprint {...LoginFormIconStyles} />
            </>
          }
          type={isVisible ? 'text' : 'password'}
          changeHandler={formikRegistration.handleChange}
          iconFocusPos={1} />

        <AuthFormInput
          inputError={formikRegistration.errors.cPassword}
          label='Confirm Password'
          id='sign_up_conf_password'
          name='cPassword'
          icon={
            <>
              {!isConfirmVisible ?
                <BsEyeFill onClick={() => setIsConfirmVisible(!isConfirmVisible)} {...LoginFormIconStyles} />
                :
                <BsFillEyeSlashFill onClick={() => setIsConfirmVisible(!isConfirmVisible)} {...LoginFormIconStyles} />}
              <BsFingerprint {...LoginFormIconStyles} />
            </>
          }
          type={isConfirmVisible ? 'text' : 'password'}
          changeHandler={formikRegistration.handleChange}
          iconFocusPos={1}
          onEnterDown={e => {
            if (e.key === 'Enter') {
              formikRegistration.submitForm();
            }
          }} />
        {
          formikRegistration.isSubmitting ?
            <Spinner />
            :
            <>
              <Input type='submit' {...LoginButtonStyles}
                value='Sign Up' />
              <ProvidersBlock isRegistration={true} />
            </>
        }
      </Flex>
    </form>
  )
};

export default RegistrationForm;