import { Box, Text } from "@chakra-ui/react";

const UserInfoText = ({ label, text }: { label: string, text: string }) => {
    return (
        <Box>
            <Text color='#888'>{label}</Text>
            <Text>{text}</Text>
        </Box>
    )
};

export default UserInfoText