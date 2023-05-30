import { useFormik } from 'formik';
const emailRegExp = new RegExp('!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i');

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

      const resp = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newAdmin)
      });

      if (resp.ok) {
        successHandler();
      }
    },
    validate: values => {
      let errors: {
        first_name?: string,
        last_name?: string,
        email?: string,
        password?: string,
        cPassword?: string
      } = {};

      if (!values.first_name) {
        errors.first_name = 'First name is required';
      } else if (new RegExp('[0-9]').test(values.first_name)) {
        errors.first_name = 'First name field must contain only characters';
      }

      if (!values.last_name) {
        errors.last_name = 'Last name is required';
      } else if (new RegExp('[0-9]').test(values.last_name)) {
        errors.last_name = 'Last name field must contain only characters';
      }

      if (!values.email) {
        errors.email = 'Email is required';
      } else if (emailRegExp.test(values.email)) {
        errors.email = 'Email format is incorrect'
      }

      if (!values.password) {
        errors.password = 'Password is required';
      } else if (values.password.length <= 5) {
        errors.password = 'Password must be at least 6 characters long'
      }

      if (!values.cPassword) {
        errors.cPassword = 'Password is required';
      } else if (values.password.length <= 5) {
        errors.cPassword = 'Password must be at least 6 characters long'
      }

      if (values.password !== values.cPassword) {
        errors.cPassword = 'Passwords don\'t match, please try again.'
      }

      return errors;
    },
    validateOnChange: false,
  });
};