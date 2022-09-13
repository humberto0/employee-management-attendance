import { QueryClientProvider } from "react-query";

import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";

import AppProvider from "../contexts";
import { queryClient } from "../services/queryClient";
import { theme } from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider resetCSS theme={theme}>
        <AppProvider>
          <Component {...pageProps} />
        </AppProvider>
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
