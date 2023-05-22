import { ButtonDefaultStyles } from "@/styles/additionalStyles";
import { Button, Tooltip } from "@chakra-ui/react";

const UserLinksBlock = () => {
  return (
    <>
      <Tooltip label='There is nothing yet'>
        <Button {...ButtonDefaultStyles}><i className="bi bi-github link-icon" /></Button>
      </Tooltip>
      <Tooltip label='There is nothing yet'>
        <Button {...ButtonDefaultStyles}><i className="bi bi-linkedin link-icon" /></Button>
      </Tooltip >
      <Tooltip label='There is nothing yet'>
        <Button {...ButtonDefaultStyles} gap='.5em'> <i className="bi bi-file-earmark-pdf-fill" />Resume</Button>
      </Tooltip >
    </>
  )
};
export default UserLinksBlock;