import { ButtonDefaultStyles } from "@/styles/additionalStyles";
import { Button, Flex } from "@chakra-ui/react";
import { signIn } from "next-auth/react";
import { BsGithub, BsGoogle } from "react-icons/bs";

const ProvidersBlock = ({ isRegistration }: { isRegistration: boolean }) => {
  return (
    <>
      <Flex alignItems={'center'} direction='column' w='30%' m='2em auto' gap='2em'>
        <Button {...ButtonDefaultStyles} gap='1em'
          onClick={async () => await signIn('google', { callbackUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/users` })} >
          Sign {isRegistration ? 'Up' : 'In'} with Google Account <BsGoogle />
        </Button>
        <Button {...ButtonDefaultStyles} gap='1em'
          onClick={async () => await signIn('github', { callbackUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/users` })}>
          Sign {isRegistration ? 'Up' : 'In'} with Github Account <BsGithub />
        </Button>
      </Flex>
    </>
  )
};


export default ProvidersBlock;