import { useAppDispatch } from "@/store/hooks/useAppDispatch";
import { fillUpForm, formTypeHandler, initialFormState, toggleFormVisibility } from "@/store/slices/clientSlice";

export const useToggleFormAdd = () => {
  const dispatch = useAppDispatch();
  return () => {
    dispatch(toggleFormVisibility());
    dispatch(formTypeHandler('add'));
    dispatch(fillUpForm(initialFormState));
  };
};