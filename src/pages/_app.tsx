import { Fragment } from "react";

import type { AppProps } from "next/app";
import Head from "next/head";

import "normalize.css";

import { MantineProvider } from "@mantine/core";
import "@/components/Mantine";

import "@/styles/root.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <title>PAWAI 2026: Gods Paradise (Coming Soon)</title>

        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1" />
      </Head>

      <MantineProvider>
        <Component {...pageProps} />
      </MantineProvider>
    </Fragment>
  );
};