import { formTypeSelector } from '@/store/selectors';
import { Flex, Text, useColorModeValue } from '@chakra-ui/react';
import { BsPersonFillAdd, BsPersonFillUp } from 'react-icons/bs';
import { useSelector } from 'react-redux';

const FormTitle = () => {

  const formType = useSelector(formTypeSelector);
  const isAddUser = formType === 'add';
  const iconBgCol = useColorModeValue('#EEEEEE', '#212121');
  const iconColor = useColorModeValue('#aaa', '#ddd');

  return (
    <>
      <Flex justifyContent={'center'} alignItems='center' gap='1em'>
        <Flex backgroundColor={iconBgCol} borderRadius='50%' justifyContent={'center'} alignItems='center' h='50px' w='50px'>
          {
            isAddUser ?
              <BsPersonFillAdd style={{ fontSize: '2em', color: iconColor }} />
              :
              <BsPersonFillUp style={{ fontSize: '2em', color: iconColor }} />
          }
        </Flex>
        <Text fontSize='2em' textTransform={'uppercase'}>
          {isAddUser ? `Add User` : `Update User`}
        </Text>
      </Flex>
    </>
  )
};
export default FormTitle;
