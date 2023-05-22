import { FormDataType, FormValidationResult } from "@/types";

export const formValidation = (formData: FormDataType): { status: boolean, validationResult?: FormValidationResult } => {
  const { first_name, last_name, email, salary, birth_date, status, sex } = formData;
  let validationResult: FormValidationResult = {
    first_name: false, last_name: false, email: false, salary: false, birth_date: false, status: false, sex: false,
  };

  if (/^[A-Za-zА-Яа-я]+$/.test(first_name)) {
    validationResult.first_name = true;
  }

  if (/^[A-Za-zА-Яа-я]+$/.test(last_name)) {
    validationResult.last_name = true;
  }

  if (status === 'active' || status === 'inactive') {
    validationResult.status = true;
  }

  if (sex === 'male' || sex === 'female') {
    validationResult.sex = true;
  }

  if (/\d/.test(salary)) {
    validationResult.salary = true;
  }

  if (/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/.test(email)) {
    validationResult.email = true;
  }

  const [year, month, day] = birth_date.split('-');

  if (parseInt(year) > 1900 && parseInt(year) <= 2020) {
    if (parseInt(month) >= 1 && parseInt(month) <= 12) {
      if (parseInt(day) >= 1 && parseInt(day) <= 31) {
        validationResult.birth_date = true;
      }
    }
  }

  let result = [];

  for (let key in validationResult) {
    let value = validationResult[key as keyof typeof validationResult];
    if (value) {
      result.push(value);
    }
  }


  if (result.length === 7) {
    return { status: true };
  } else {
    return { status: false, validationResult };
  }
};
