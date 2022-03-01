import * as React from "react";
import Head from "next/head";
import { ThemeProvider } from "styled-components/native";
import { primary, secendary } from "../src/style/theme.config";
import { SessionProvider } from "next-auth/react";
import GlobalStyles from "../src/style/globalStyle";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <>
      <GlobalStyles />
      <SessionProvider session={session}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <ThemeProvider theme={primary}>
          <Component {...pageProps} />
        </ThemeProvider>
      </SessionProvider>
    </>
  );
}

export default MyApp;
