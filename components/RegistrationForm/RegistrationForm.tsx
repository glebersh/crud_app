import { LoginFormIconStyles } from "@/styles/additionalStyles";
import { Flex, Input, Text } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import AuthFormInput from "../AuthFormInput/";
import { useSignUp } from "@/hooks";

const RegistrationForm = ({ successHandler }: { successHandler: () => void }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isConfirmVisible, setIsConfirmVisible] = useState<boolean>(false);

  const formikRegistration = useSignUp(successHandler);

  return (
    <form onSubmit={e => {
      e.preventDefault();
      formikRegistration.submitForm();
    }}>
      <Flex alignItems='center' direction='column' w='50%' m='2em auto' gap='1.5em'>
        <Flex direction='column' alignItems='center'>
          <Flex alignItems='center' gap='1em'>
            <i className="bi bi-person-workspace" style={{ fontSize: '2em' }}></i>
            <Text fontSize='3em'>Sign Up</Text>
          </Flex>
        </Flex>

        <AuthFormInput
          label='First Name'
          id='first_name'
          name='first_name'
          icon={<i className="bi bi-person-bounding-box" {...LoginFormIconStyles}></i>}
          type='text'
          changeHandler={formikRegistration.handleChange} />

        <AuthFormInput
          label='Last Name'
          id='last_name'
          name='last_name'
          icon={<i className="bi bi-person-bounding-box" {...LoginFormIconStyles}></i>}
          type='text'
          changeHandler={formikRegistration.handleChange} />

        <AuthFormInput
          label='Email'
          id='email'
          name='email'
          icon={<i className="bi bi-mailbox2" {...LoginFormIconStyles}></i>}
          type='email'
          changeHandler={formikRegistration.handleChange} />

        <AuthFormInput
          label='Password'
          id='sign_up_password'
          name='password'
          icon={
            <>
              <i className={`bi bi-eye-${isVisible ? 'slash-' : ''}fill`} {...LoginFormIconStyles} onClick={() => setIsVisible(!isVisible)} />
              <i className="bi bi-fingerprint" {...LoginFormIconStyles}></i>
            </>
          }
          type={isVisible ? 'text' : 'password'}
          changeHandler={formikRegistration.handleChange}
          iconFocusPos={1} />

        <AuthFormInput
          label='Confirm Password'
          id='sign_up_conf_password'
          name='cPassword'
          icon={
            <>
              <i className={`bi bi-eye-${isConfirmVisible ? 'slash-' : ''}fill`} {...LoginFormIconStyles}
                onClick={() => setIsConfirmVisible(!isConfirmVisible)} />
              <i className="bi bi-fingerprint" {...LoginFormIconStyles}></i>
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

        <Input type='submit' value='Sign up' backgroundColor='accentOne' color='white' fontWeight='700' />
      </Flex>
    </form>
  )
};

export default RegistrationForm;