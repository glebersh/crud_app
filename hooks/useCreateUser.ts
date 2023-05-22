import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createUser } from "@/lib/apiHelpers";
import { fillUpForm, initialFormState, setOperationResult, hideAlert, toggleFormVisibility } from "@/store/slices/clientSlice";
import { useAppDispatch } from "@/store/hooks/useAppDispatch";

export const useCreateUser = () => {

  const queryClient = useQueryClient();
  const dispatch = useAppDispatch();

  const { mutate: createNewUser } = useMutation(createUser, {
    onSuccess: () => {
      dispatch(setOperationResult({
        alertVisible: true,
        alertMessage: 'New user successfully added',
        operationStatus: 'success'
      }));
      queryClient.invalidateQueries(['users']);
      dispatch(fillUpForm(initialFormState));
      setTimeout(() => dispatch(hideAlert(false)), 5000);
    },
    onError: () => {
      dispatch(setOperationResult({
        alertVisible: true,
        alertMessage: `An error occured while creating new user`,
        operationStatus: 'error'
      }));
      setTimeout(() => dispatch(hideAlert(false)), 5000);
    }
  });

  return createNewUser;
};