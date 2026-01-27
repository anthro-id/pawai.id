import type { AppProps } from "next/app";
import "normalize.css";

import { MantineProvider } from "@mantine/core";
import "@/components/Mantine";

import "@/styles/root.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider>
      <Component {...pageProps} />
    </MantineProvider>
  );
};