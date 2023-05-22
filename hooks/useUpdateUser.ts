import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUser } from "@/lib/apiHelpers";
import { fillUpForm, initialFormState, setOperationResult, hideAlert } from "@/store/slices/clientSlice";
import { useAppDispatch } from "@/store/hooks/useAppDispatch";

export const useUpdateUser = () => {

  const queryClient = useQueryClient();
  const dispatch = useAppDispatch();

  const { mutate: updateCurrentUser } = useMutation(updateUser, {
    onSuccess: () => {
      dispatch(setOperationResult({
        alertVisible: true,
        alertMessage: 'User successfully updated',
        operationStatus: 'success'
      }));
      queryClient.invalidateQueries(['users']);
      dispatch(fillUpForm(initialFormState));
      setTimeout(() => dispatch(hideAlert(false)), 5000);
    },
    onError: () => {
      dispatch(setOperationResult({
        alertVisible: true,
        alertMessage: `An error occured while updating user`,
        operationStatus: 'error'
      }));
      setTimeout(() => dispatch(hideAlert(false)), 5000);
    }
  });

  return updateCurrentUser;
};