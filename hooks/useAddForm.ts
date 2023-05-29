import { FormDataType } from "@/types";
import { useFormik } from "formik";

export const useAddForm = (data: FormDataType, submitHandler: (data: FormDataType) => void) => {
    return useFormik({
        initialValues: data,
        onSubmit: (values) => {
            submitHandler(values);
        }
    });
};