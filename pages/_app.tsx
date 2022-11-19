import '../styles/globals.css'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import { UserProvider } from '@auth0/nextjs-auth0';
import Navigation from '../components/navigation';
import Menu from '../components/Menu';
import { GlobalStyle, theme } from '../style';
import { ThemeProvider } from 'styled-components';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Games for good</title>
      </Head>
      <ThemeProvider theme={theme}>
      <UserProvider>
        <GlobalStyle />
        <Component {...pageProps} />
        <Menu />
        </UserProvider>
        </ThemeProvider>
    </>
  );
}
