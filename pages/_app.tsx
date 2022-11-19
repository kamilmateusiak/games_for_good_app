import '../styles/globals.css'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import { UserProvider } from '@auth0/nextjs-auth0';
import Navigation from '../components/navigation';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Games for good</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <UserProvider>
        <Component {...pageProps} />
        <Navigation />
    </UserProvider>
    </>
  );
}
