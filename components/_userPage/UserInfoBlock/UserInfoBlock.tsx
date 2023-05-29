import { MongoDBUserModel } from "@/types";
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { useBackgroundColor } from "@/hooks/useBackgroundColor";
import UserInfoText from "../UserInfoTextItem/";
import { toFirstLetterCapital } from "@/lib/capitalFirstLetter";
import { AiOutlineContacts, AiOutlineMail } from "react-icons/ai";
import { GrContactInfo, GrScorecard } from "react-icons/gr";
import { BsDot, BsFileEarmarkPerson, BsFillTelephoneFill, BsInfoSquare, BsShare, BsUiChecks } from "react-icons/bs";
import UserLinksBlock from "../UserLinksBlock";
import { ButtonDefaultStyles } from "@/styles/additionalStyles";

const UserInfoBlock = ({ user }: { user: MongoDBUserModel }) => {
  const { _id, name, email, salary, birth_date, status, gender, avatar_img_URL, phone, department, desiredPosition, about } = user;
  const bgColor = useBackgroundColor();

  return (
    <Flex backgroundColor={bgColor} m='2em auto' p='2em' w='80%' borderRadius='.35em' gap='3em'>
      <Image src={avatar_img_URL} w='220px' h='220px' boxShadow='rgba(99, 99, 99, .4) 0px 2px 8px 0px' borderRadius='50%' />
      <Flex gap='1em' direction='column' flex='1'>

        <Flex direction='column' borderRadius='.35em' gap='1em'>
          <Flex fontSize='1.75em' borderBottom='1px solid #bbbbbb70' alignItems='center' gap='1em'>
            <BsFileEarmarkPerson />
            Personal Details
          </Flex>
          <Flex gap='15em'>
            <UserInfoText label='Name' text={name} />
            <UserInfoText label='Gender' text={toFirstLetterCapital(gender)} />
            <UserInfoText label='Birth date' text={birth_date} />
          </Flex>
        </Flex>

        <Flex direction='column' borderRadius='.35em' gap='1em' mt='1em'>
          <Flex fontSize='1.75em' borderBottom='1px solid #bbbbbb70' alignItems='center' gap='1em'>
            <AiOutlineContacts />
            Contact Details
          </Flex>
          <Flex gap='15em'>
            <Flex alignItems='center' gap='1em'>
              <Flex backgroundColor='#EEEEEE70' borderRadius='50%' w='40px' h='40px' justifyContent='center' alignItems='center'>
                <AiOutlineMail />
              </Flex>
              <UserInfoText label='Email' text={email} />
            </Flex>
            <Flex alignItems='center' gap='1em'>
              <Flex backgroundColor='#EEEEEE70' borderRadius='50%' w='40px' h='40px' justifyContent='center' alignItems='center'>
                <BsFillTelephoneFill />
              </Flex>
              <UserInfoText label='Phone number' text={phone} />
            </Flex>
          </Flex>
        </Flex>

        <Flex direction='column' borderRadius='.35em' gap='1em' mt='1em'>
          <Flex fontSize='1.75em' borderBottom='1px solid #bbbbbb70' alignItems='center' gap='1em'>
            <BsUiChecks />
            Job Details
          </Flex>
          <Flex gap='15em'>
            <UserInfoText label='Position' text={desiredPosition} />
            <UserInfoText label='Department' text={toFirstLetterCapital(department)} />
            <UserInfoText label='Salary' text={salary} />
            <Flex>
              <UserInfoText label='Status' text={toFirstLetterCapital(status)} />
              <BsDot color={status === 'active' ? 'green' : 'red'} fontSize='4em' />
            </Flex>
          </Flex>
        </Flex>

        <Flex direction='column' borderRadius='.35em' gap='1em' mt='1em'>
          <Flex fontSize='1.75em' borderBottom='1px solid #bbbbbb70' alignItems='center' gap='1em'>
            <BsInfoSquare />
            Additional Info
          </Flex>
          <UserInfoText label='About' text={about} />
        </Flex>
      </Flex>
      <Flex ml='auto' direction={'column'} gap='2em' alignItems='flex-end'>
        <BsShare />
        <Box>
          <Text color='#888' mb={'.5em'}>More</Text>
          <UserLinksBlock />
        </Box>
      </Flex>
    </Flex >
  )
};
export default UserInfoBlock;