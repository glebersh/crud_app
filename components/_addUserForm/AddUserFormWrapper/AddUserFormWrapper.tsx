import AddUserForm from "../AddUserForm";
import { useAppDispatch } from "@/store/hooks/useAppDispatch";
import { toggleFormVisibility } from "@/store/slices/formSlice";
import { FormDataType } from "@/types";
import { useSelector } from "react-redux";
import { useCreateUser } from "@/hooks/useCreateUser";
import { useUpdateUser } from "@/hooks/useUpdateUser";
import { Box } from "@chakra-ui/react";
import { formSelector } from "@/store/selectors";

const AddUserFormWrapper = () => {

  const dispatch = useAppDispatch();
  const { formVisibility: isFormVisible, formType, currentUserID } = useSelector(formSelector);

  const updateCurrentUser = useUpdateUser();
  const createNewUser = useCreateUser();

  const formSubmitHandler = (values: FormDataType): void => {
    const { first_name, last_name, status, avatar_img_URL, ...otherFormData } = values;
    const newUser = {
      name: `${first_name} ${last_name}`,
      status: status || 'active',
      avatar_img_URL: avatar_img_URL || 'https://source.boringavatars.com/',
      ...otherFormData
    };
    formType === 'add' ? createNewUser(newUser) : updateCurrentUser({ userID: currentUserID, formData: newUser });
    dispatch(toggleFormVisibility());
  };



  return (
    <>
      {
        isFormVisible &&
        <Box w='50%' position='absolute'>
          <AddUserForm submitHandler={formSubmitHandler} />
        </Box >
      }
    </>
  )
};
export default AddUserFormWrapper;