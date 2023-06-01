import { emailRegExp } from "@/consts";
import { FormDataType } from "@/types";
import { useFormik } from "formik";

export const useAddForm = (data: FormDataType, submitHandler: (data: FormDataType) => void) => {
    return useFormik({
        initialValues: data,
        onSubmit: (values) => {
            submitHandler(values);
        },
        validate: values => {
            let errors: {
                first_name?: string,
                last_name?: string,
                email?: string,
                salary?: string,
                birth_date?: string,
                avatar_img_URL?: string,
                status?: string,
                gender?: string,
                department?: string,
                phone?: string,
                desiredPosition?: string,
                about?: string
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
                errors.email = 'Email field is required'
            } else if (emailRegExp.test(values.email)) {
                errors.email = 'Invalid email format!'
            }

            if (!values.salary) {
                errors.salary = 'Salary is required';
            } else if (new RegExp('[A-Za-zА-Яа-я]').test(values.salary)) {
                errors.salary = 'Salary field must contain only numbers';
            }

            if (!values.birth_date) {
                errors.salary = 'Salary is required';
            }

            if (!values.status) {
                errors.status = 'Status is required';
            } else if (values.status !== 'active' && values.status !== 'inactive') {
                errors.status = 'Status must be either active or inactive';
            }

            if (!values.gender) {
                errors.gender = 'Gender is required';
            } else if (values.gender !== 'male' && values.gender !== 'female') {
                errors.gender = 'Gender field must be either male or female';
            }

            if (!values.department) {
                errors.department = 'Department is required';
            }

            if (!values.desiredPosition) {
                errors.desiredPosition = 'Desired position is required';
            }

            if (!values.phone) {
                errors.phone = 'Phone is required';
            } else if (new RegExp('[A-Za-zА-Яа-я]').test(values.phone)) {
                errors.phone = 'Phone field must contain only numbers';
            }

            return errors;
        },
        validateOnChange: false,
    });
};