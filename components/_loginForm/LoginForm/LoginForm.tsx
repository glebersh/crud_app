import { LoginButtonStyles, LoginFormIconStyles } from "@/styles/additionalStyles";
import { Box, Flex, Input, Spinner, Text } from "@chakra-ui/react";
import { useState } from "react";
import AuthFormInput from "../AuthFormInput";
import { useSignIn } from "@/hooks/";
import { BsEyeFill, BsFillEyeSlashFill, BsFingerprint, BsMailbox2, BsPersonWorkspace } from "react-icons/bs";
import ProvidersBlock from "../ProvidersBlock";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

const LoginForm = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const formikLogin = useSignIn();
  const authResult = useSelector((state: RootState) => state.authReducer);

  return (
    <>
      <form onSubmit={formikLogin.handleSubmit}>
        <Flex alignItems='center' direction='column' w='50%' m='2em auto' gap='2em'>
          <Flex direction='column' alignItems='center'>
            <Flex alignItems='center' gap='1em'>
              <BsPersonWorkspace fontSize={'2em'} />
              <Text fontSize='3em'>Sign In</Text>
            </Flex>
          </Flex>

          <Box>
            <Text mt='.33em'>Sign In with email, Google or Github account.
              If you don&apos;t want to create a new account, you can use existing mock data:</Text>
            <Flex direction='column' mt='.33em' align='flex-start'>
              <strong>Email - admin@example.com</strong>
              <strong>Password: admin</strong>
            </Flex>
          </Box>

          <AuthFormInput
            inputError={authResult.error === 'User not found' ? authResult.error : formikLogin.errors.email}
            label='Email'
            id='email'
            name='email'
            icon={<BsMailbox2 {...LoginFormIconStyles} />}
            type='email'
            changeHandler={formikLogin.handleChange} />

          <AuthFormInput
            inputError={authResult.error === 'Incorrect password' ? authResult.error : formikLogin.errors.password}
            label='Password'
            id='sign_in_password'
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
            changeHandler={formikLogin.handleChange}
            iconFocusPos={1}
            onEnterDown={e => {
              if (e.key === 'Enter') {
                formikLogin.submitForm();
              }
            }} />
          {
            formikLogin.isSubmitting ?
              <Spinner />
              :
              <>
                <Input type='submit' {...LoginButtonStyles}
                  value='Sign In' />
                <ProvidersBlock isRegistration={false} />
              </>
          }
        </Flex>
      </form>
    </>
  )
};


export default LoginForm;