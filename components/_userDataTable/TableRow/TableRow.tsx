import Link from "next/link";
import { MongoDBUserModel } from "@/types";
import { useDeleteUser } from "@/hooks/useDeleteUser";
import { RowDefaultStyles, UserRowIconsStyles } from "@/styles/additionalStyles";
import { Text, Tooltip } from "@chakra-ui/react";
import { AnimatePresence, motion } from 'framer-motion';
import { useToggleFormUpdate } from "@/hooks";
import { BsPencilSquare, BsPersonDashFill } from "react-icons/bs";

const TableRow = ({ user, haveBorder }: { user: MongoDBUserModel, haveBorder?: boolean }) => {
  const { _id, name, email, salary, birth_date, status, gender } = user;

  const deleteUser = useDeleteUser();
  const updateUserHandler = useToggleFormUpdate(user, _id)

  const alertAnimations = {
    key: '21313sdsd',
    initial: { opacity: 0, height: ' 0px' },
    animate: { opacity: 1, height: '80px' },
    exit: {
      opacity: 0,
      height: '0px',
    },
    transition: {
      duration: 0.66,
    }
  };

  return (
    <AnimatePresence>
      <motion.tr {...alertAnimations}
        {...RowDefaultStyles}
        style={{ borderBottom: `${haveBorder ? '1px solid #EEE' : '1px solid transparent'}` }}>
        <td>
          <img src={user.avatar_img_URL} alt={`${user.name}_profile_picture`} width={50} height={50} />
        </td>
        <td>
          <Text _hover={{ cursor: 'pointer', color: 'accentOne' }} transition='all .33s'>
            <Link href={`/users/${_id}`}>
              {name}
            </Link>
          </Text>
        </td>
        <td>{email}</td>
        <td>{birth_date}</td>
        <td>{salary}</td>
        <td>{gender.toUpperCase()}</td>
        <td>{status.toUpperCase()}</td>
        <td>
          <Tooltip label='Edit user'>
            <Text>
              <BsPencilSquare className="row_user_actions_icon"
                onClick={updateUserHandler}
                {...UserRowIconsStyles} />
            </Text>
          </Tooltip>
        </td>
        <td>
          <Tooltip label='Delete user'>
            <Text>
              <BsPersonDashFill
                className="row_user_actions_icon"
                onClick={() => deleteUser(_id)}
                {...UserRowIconsStyles} />
            </Text>
          </Tooltip>
        </td>
      </motion.tr>
    </AnimatePresence>
  )
};

export default TableRow;