import { useAppDispatch } from '@/store/hooks/useAppDispatch';
import { setAuthResult } from '@/store/slices/authSlice';
import { useFormik } from 'formik';
import { SignInResponse, signIn } from 'next-auth/react';

const emailRegExp = new RegExp('!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i');

export const useSignIn = () => {
  const dispatch = useAppDispatch();
  return useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate: values => {
      let errors: { email?: string, password?: string } = {};

      if (!values.email) {
        errors.email = 'Email field is required'
      } else if (emailRegExp.test(values.email)) {
        errors.email = 'Invalid email format!'
      }

      if (!values.password) {
        errors.password = 'Password field is required'
      }
      return errors;
    },
    validateOnChange: false,
    onSubmit: async (values) => {
      await signIn('credentials', {
        redirect: false,
        email: values.email,
        password: values.password,
        callbackUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/users`,
      })
        .then((res: SignInResponse | undefined) => {
          if (res) {
            console.log(res);

            dispatch(setAuthResult(res));
          }
        })
    },
  });
};