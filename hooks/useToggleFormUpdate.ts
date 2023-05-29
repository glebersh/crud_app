import { useAppDispatch } from "@/store/hooks/useAppDispatch";
import { fillUpForm, formTypeHandler, setCurrentUser, toggleFormVisibility } from '../store/slices/formSlice';
import { MongoDBUserModel } from "@/types";

export const useToggleFormUpdate = (user: MongoDBUserModel, _id: string) => {
  const dispatch = useAppDispatch();
  const { name, ...newUser } = user;
  const updatedUser = {
    first_name: user.name.split(' ')[0],
    last_name: user.name.split(' ')[1],
    ...newUser
  };

  return () => {
    dispatch(toggleFormVisibility());
    dispatch(formTypeHandler('update'));
    dispatch(fillUpForm(updatedUser));
    dispatch(setCurrentUser(_id));
  }
};