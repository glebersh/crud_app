import '@/styles/globals.css';
import type { AppProps } from 'next/app'
import chakraTheme from '../theme';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import store from '@/store';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { AnimatePresence } from 'framer-motion';
import { SessionProvider } from 'next-auth/react';
import { Session } from 'next-auth';

const client = new QueryClient();

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps<{ session: Session }>) {

  return (
    <>
      <QueryClientProvider client={client}>
        <Provider store={store}>
          <ChakraProvider theme={chakraTheme}>
            <SessionProvider session={session} refetchOnWindowFocus={false}>
              <AnimatePresence initial={false} mode="wait">
                <Component {...pageProps} />
              </AnimatePresence>
            </SessionProvider>
          </ChakraProvider>
        </Provider>
        <ReactQueryDevtools />
      </QueryClientProvider >
    </>
  )
}
