import { ButtonDefaultStyles } from "@/styles/additionalStyles";
import { Button, Flex, Tooltip } from "@chakra-ui/react";
import { BsFilePdf, BsGithub, BsLinkedin } from "react-icons/bs";

const UserLinksBlock = () => {
  return (
    <Flex direction={'column'} gap='1em'>
      <Tooltip label='There is nothing yet'>
        <Button {...ButtonDefaultStyles}>
          <BsLinkedin />
        </Button>
      </Tooltip>
      <Tooltip label='There is nothing yet'>
        <Button {...ButtonDefaultStyles}>
          <BsGithub />
        </Button>
      </Tooltip >
      <Tooltip label='There is nothing yet'>
        <Button {...ButtonDefaultStyles} gap='.5em'>
          <BsFilePdf />
          Resume</Button>
      </Tooltip >
    </Flex>
  )
};
export default UserLinksBlock;