import { ChevronRightIcon } from "@chakra-ui/icons";
import { Flex, Text } from "@chakra-ui/react";
import Link from "next/link";

const NavigationLink = ({ paths }: { paths: string[] }) => {

  return (
    <Flex alignItems='center' p='0' m='0'>
      {
        paths.map((path: string, index: number) => (
          <span key={`navigation_link_to_${path}`}>
            <Flex alignItems='center' h='100%'>
              <Text _hover={{ color: 'accentOne', transform: 'translateY(5px)' }} transition={'all 0.33s'}>
                < Link href={path === 'home' ? `/` : `/${paths.slice(1, index + 1).join('/')}`
                } >
                  {path.toUpperCase()}
                </Link>
              </Text>
              {index + 1 >= paths.length ? null : <ChevronRightIcon fontSize='1.25em' color='darkgray' />}
            </Flex>
          </span >
        ))
      }
    </Flex >
  )
};
export default NavigationLink;