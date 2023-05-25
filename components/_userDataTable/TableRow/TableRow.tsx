import Link from "next/link";
import { MongoDBUserModel } from "@/types";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { useDeleteUser } from "@/hooks/useDeleteUser";
import { RowDefaultStyles, UserRowIconsStyles } from "@/styles/additionalStyles";
import { Text, Tooltip, useColorModeValue } from "@chakra-ui/react";
import { AnimatePresence, motion } from 'framer-motion';
import { useToggleFormUpdate } from "@/hooks";

const TableRow = ({ user, haveBorder }: { user: MongoDBUserModel, haveBorder?: boolean }) => {
  const { _id, name, email, salary, birth_date, status, sex } = user;

  const deleteUser = useDeleteUser();
  const iconCol = useColorModeValue('accentOne', 'accentOne');
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
        <td>{sex.toUpperCase()}</td>
        <td>{status.toUpperCase()}</td>
        <td>
          <Tooltip label='Edit user'>
            <i className="bi bi-pencil-square"
              onClick={updateUserHandler}
              {...UserRowIconsStyles} />
          </Tooltip>
        </td>
        <td>
          <Tooltip label='Delete user'>
            <i className="bi bi-person-dash-fill"
              onClick={() => deleteUser(_id)}
              {...UserRowIconsStyles} />
          </Tooltip>
        </td>
      </motion.tr>
    </AnimatePresence>
  )
};

export default TableRow;