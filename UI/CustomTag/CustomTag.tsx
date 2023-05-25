import { As, Box, Flex, Tag, TagLeftIcon } from "@chakra-ui/react";
import { ReactNode } from "react";

const CustomTag = ({ icon, label }: { icon?: ReactNode, label: string | number }) => {
  return (
    <Tag variant='solid' backgroundColor={'accentOne'} fontWeight={700} fontSize='1em'>
      <Box mr='.5em' fontSize='1.25em'>
        {icon}
      </Box>
      {label}
    </Tag>
  )
};
export default CustomTag;