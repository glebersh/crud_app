import AddUserForm from "../AddUserForm";
import { useAppDispatch } from "@/store/hooks/useAppDispatch";
import { ChangeEvent, FormEvent } from 'react';
import { setValidationResult, toggleFormVisibility, updateForm } from "@/store/slices/clientSlice";
import { FormValueType } from "@/types";
import { RootState } from "@/store";
import { useSelector } from "react-redux";
import { useCreateUser } from "@/hooks/useCreateUser";
import { useUpdateUser } from "@/hooks/useUpdateUser";
import { Box } from "@chakra-ui/react";
import { formValidation } from "@/lib/formValidation";



const AddAddUserFormWrapper = () => {

  const dispatch = useAppDispatch();
  const { formVisibility: isFormVisible, formData, formType, currentUserID } = useSelector((state: RootState) => state.clientReducer);

  const updateFormHandler = (e: ChangeEvent): void => {
    const targeEl = e.target as HTMLInputElement;
    const newValue: FormValueType = {};
    newValue[targeEl.name] = targeEl.value;
    dispatch(updateForm(newValue));
  };

  const updateCurrentUser = useUpdateUser();
  const createNewUser = useCreateUser();

  const formSubmitHandler = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const { status, validationResult } = formValidation(formData);
    if (status) {
      const { first_name, last_name, status, avatar_img_URL, ...otherFormData } = formData;
      const newUser = {
        name: `${first_name} ${last_name}`,
        status: status || 'active',
        avatar_img_URL: avatar_img_URL || 'https://source.boringavatars.com/',
        ...otherFormData
      };
      formType === 'add' ? createNewUser(newUser) : updateCurrentUser({ userID: currentUserID, formData: newUser });
      dispatch(toggleFormVisibility());
    } else if (!status && validationResult) {
      dispatch(setValidationResult(validationResult));
    }
  };


  return (
    <>
      {
        isFormVisible &&
        <Box w='50%' position='absolute'>
          <AddUserForm onSubmit={formSubmitHandler} updateInputHandler={updateFormHandler} />
        </Box >
      }
    </>
  )
};
export default AddAddUserFormWrapper;