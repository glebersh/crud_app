import { motion } from "framer-motion";
import { ReactNode } from "react";
import Header from "../Header";

const PageAnimationWrapper = ({ children }: { children: ReactNode }) => {

  const alertAnimations = {
    key: 'AlertBlock',
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 1 }
  }

  return (
    <>
      <motion.main {...alertAnimations}>
        {children}
      </motion.main>
    </>
  )
};
export default PageAnimationWrapper;