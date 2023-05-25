import { Alert, AlertIcon } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";
import { operationResultSelector } from "@/store/selectors";

const AlertBlock = () => {
  const { alertVisible, alertMessage, operationStatus } = useSelector(operationResultSelector);

  const alertAnimations = {
    key: 'AlertBlock',
    initial: { opacity: 0, height: ' 0px' },
    animate: { opacity: 1, height: '60px' },
    exit: {
      opacity: 0,
      height: '0px',
    },
    transition: {
      duration: 0.66,
      type: "tween",
      stiffness: 10
    }
  };

  return (
    <AnimatePresence>
      {
        alertVisible &&
        <motion.div {...alertAnimations} style={{ margin: '1em 0 0' }}>
          <Alert status={operationStatus === 'success' ? 'success' : 'error'} w='50%' m='0 auto'>
            <AlertIcon />
            {alertMessage}
          </Alert>
        </motion.div>
      }
    </AnimatePresence>
  )
};

export default AlertBlock;