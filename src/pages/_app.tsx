import { Fragment } from "react";

import { Lenis } from "lenis/react";

import { ParallaxProvider } from "react-scroll-parallax";

import type { AppProps } from "next/app";
import Head from "next/head";

import "normalize.css";

import { MantineProvider } from "@mantine/core";
import { mantineTheme } from "@/components/Mantine";

import MetaTags from "@/components/MetaTags";
import Loading from "@/components/Loading";

import "@/styles/fonts.css";
import "@/styles/root.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <title>PAWAI 2026: Gods Paradise</title>

        <MetaTags
          title={"PAWAI 2026: Gods Paradise"}
          description={"A long-awaited furry gathering event, nestled in the island paradise of Bali, Indonesia."}
          url={"https://pawai.id"}
          imageUrl={"https://canine.cdn.anthro.id/handled-by-anthroid-team/27-01-26/ff2847e9-1470-4a8a-a228-fd9877440b0f"}
          color={"#FC5D01"}
        />

        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1" />
      </Head>

      <MantineProvider theme={mantineTheme} forceColorScheme={"dark"}>
        <Loading />
        
        <Lenis root>
          <ParallaxProvider>
            <Component {...pageProps} />
          </ParallaxProvider>
        </Lenis>
      </MantineProvider>
    </Fragment>
  );
};