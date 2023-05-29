import { deleteUser } from "@/lib/apiHelpers";
import { useAppDispatch } from "@/store/hooks/useAppDispatch";
import { hideAlert, setOperationResult } from "@/store/slices/operationResultSlice";
import { useQueryClient, useMutation } from "@tanstack/react-query";

export const useDeleteUser = () => {

  const dispatch = useAppDispatch();
  const queryClient = useQueryClient();

  const { mutate: deleteExistingUser } = useMutation(deleteUser, {
    onSuccess: () => {
      queryClient.prefetchQuery(['users']);
      dispatch(setOperationResult({
        alertVisible: true,
        alertMessage: `User successfully deleted`,
        operationStatus: 'success'
      }));
      setTimeout(() => dispatch(hideAlert(false)), 5000);
    },
    onError: () => {
      dispatch(setOperationResult({
        alertVisible: true,
        alertMessage: `An error occured while deleting user`,
        operationStatus: 'error'
      }))
      setTimeout(() => dispatch(hideAlert(false)), 5000);
    }
  });

  return deleteExistingUser;
};