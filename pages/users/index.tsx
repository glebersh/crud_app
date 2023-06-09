import { AddUserFormWrapper, AlertBlock, Header, ModalWindow, UserDataTableWrapper } from "@/components";
import PageAnimationWrapper from "@/components/_utils/PageAnimationWrapper"
import Head from "next/head";
import AuthProvider from "@/components/_utils/AuthProvider/AuthProvider";
import { Flex } from "@chakra-ui/react";

const UsersPage = () => {
  return (
    <AuthProvider>
      <PageAnimationWrapper>
        <Head>
          <title>CRUD APP</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <AlertBlock />
        <Flex justify='flex-start' flexDirection='column'>
          <UserDataTableWrapper />
        </Flex>
        <ModalWindow>
          <AddUserFormWrapper />
        </ModalWindow>
      </PageAnimationWrapper>
    </AuthProvider>
  )
};

export default UsersPage;