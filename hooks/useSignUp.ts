import { useFormik } from 'formik';


export const useSignUp = (successHandler: () => void) => {
  return useFormik({
    initialValues: {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      cPassword: ''
    },
    onSubmit: async (values) => {
      const { first_name, last_name, password, email } = values;
      const newAdmin = {
        name: `${first_name} ${last_name}`,
        email,
        password,
        image: null
      };

      const resp = await fetch('http://localhost:3000/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newAdmin)
      });

      if (resp.ok) {
        successHandler();
      }
    }
  });
};