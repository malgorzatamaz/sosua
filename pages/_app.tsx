import * as React from "react";
import Head from "next/head";
import { ThemeProvider } from "styled-components/native";
import { primary } from "../src/style/theme.config";
import { SessionProvider } from "next-auth/react";
import { Hydrate, QueryClientProvider } from "react-query";
import { getQueryClient } from "../lib/react-query";
import type { Session } from "next-auth";

type Props = {
  Component: React.ComponentType<{}>;
  pageProps: { dehydratedState: unknown; session?: Session };
};

function CustomApp({
  Component,
  pageProps: { session, dehydratedState, ...pageProps },
}: Props) {
  const [queryClient] = React.useState(() => getQueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Hydrate state={dehydratedState}>
        <SessionProvider session={session}>
          <ThemeProvider theme={primary}>
            <Component {...pageProps} />
          </ThemeProvider>
        </SessionProvider>
      </Hydrate>
    </QueryClientProvider>
  );
}

export default CustomApp;
