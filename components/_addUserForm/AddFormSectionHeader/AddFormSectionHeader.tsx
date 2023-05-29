import { Flex, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

type FormSectionHeaderProps = {
    label: string,
    icon: ReactNode
};

const AddFormSectionHeader = ({ label, icon }: FormSectionHeaderProps) => {
    return (
        <Flex gap='1em' fontSize='1.25em' borderBottom='1px solid #aaaaaa50' pb='.25em'>
            {icon}
            <Text textTransform={'uppercase'} fontWeight='500'>{label}</Text>
        </Flex>
    )
};

export default AddFormSectionHeader