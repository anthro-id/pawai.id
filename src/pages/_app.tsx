import { Fragment } from "react";

import { Lenis } from "lenis/react";

import { ParallaxProvider } from "react-scroll-parallax";

import type { AppProps } from "next/app";
import Head from "next/head";

import "normalize.css";

import { MantineProvider } from "@mantine/core";
import { mantineTheme } from "@/components/Mantine";

import "@/styles/fonts.css";
import "@/styles/root.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <title>PAWAI 2026: Gods Paradise (Coming Soon)</title>

        <meta content="PAWAI 2026: Gods Paradise" property="og:title" />
        <meta content="A long-awaited furry gathering event, nestled in the island paradise of Bali, Indonesia." property="og:description" />
        <meta content="https://pawai.id" property="og:url" />
        <meta content="https://canine.cdn.anthro.id/handled-by-anthroid-team/27-01-26/ff2847e9-1470-4a8a-a228-fd9877440b0f" property="og:image" />
        <meta content="#FC5D01" name="theme-color" />
        <meta name="twitter:card" content="summary_large_image" />

        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1" />
      </Head>

      <MantineProvider theme={mantineTheme} forceColorScheme={"dark"}>
        <Lenis root>
          <ParallaxProvider>
            <Component {...pageProps} />
          </ParallaxProvider>
        </Lenis>
      </MantineProvider>
    </Fragment>
  );
};