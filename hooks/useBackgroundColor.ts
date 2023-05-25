import { useColorModeValue } from "@chakra-ui/react";

export const useBackgroundColor = (): string => {
  return useColorModeValue('white', '#1a1a1a');
};