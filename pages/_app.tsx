import "../styles/globals.css";
import Head from "next/head";
import type { AppProps } from "next/app";
import { UserProvider } from "@auth0/nextjs-auth0";
import { GlobalStyle, theme } from "../style";
import { ThemeProvider } from "styled-components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PageLayout from "../components/page-layout";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Games for good</title>
      </Head>
      <ThemeProvider theme={theme}>
        <UserProvider>
          <QueryClientProvider client={queryClient}>
            <PageLayout>
              <Component {...pageProps} />
            </PageLayout>
          </QueryClientProvider>

          <GlobalStyle />
        </UserProvider>
      </ThemeProvider>
    </>
  );
}
