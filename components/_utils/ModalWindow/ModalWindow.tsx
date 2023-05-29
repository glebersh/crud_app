import { useAppDispatch } from "@/store/hooks/useAppDispatch";
import { closePopUp, toggleFormVisibility } from "@/store/slices/formSlice";
import { Flex } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import { ReactNode, useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { formVisibilitySelector } from "@/store/selectors";

const ModalWindow = ({ children }: { children: ReactNode }) => {

  const dispatch = useAppDispatch();
  const isModalVisible = useSelector(formVisibilitySelector);

  const alertAnimations = {
    key: 'wqee',
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: .33 }
  }

  const windowEscListener = useCallback((event: globalThis.KeyboardEvent): void => {
    if (event.key === 'Escape') {
      dispatch(closePopUp(false));
    }
  }, []);

  useEffect(() => {
    if (isModalVisible) {
      window.addEventListener('keydown', windowEscListener);
    }

    return () => {
      window.removeEventListener('keydown', windowEscListener);
    };
  }, [isModalVisible]);

  return (
    isModalVisible ?
      (
        <AnimatePresence>
          <motion.div {...alertAnimations}>
            <Flex w='100vw' h='100vh' justifyContent={'center'} alignItems='center' m='0'
              id='pop_up_modal_window' zIndex={'999'}
              backgroundColor='#00000080' position='absolute' top='0' left='0' right='0' bottom='0'

              onMouseDown={(e) => {
                const targetEl = e.target as HTMLDivElement;
                targetEl.id === 'pop_up_modal_window' && dispatch(toggleFormVisibility());
              }}>
              {children}
            </Flex>
          </motion.div>
        </AnimatePresence>
      ) : null
  )
};
export default ModalWindow;