import { useFormik } from 'formik';
import { signIn } from 'next-auth/react';


export const useSignIn = () => {

  return useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async (values) => await signIn('credentials', {
      redirect: false,
      email: values.email,
      password: values.password,
      callbackUrl: '/users',
    })
  });
};