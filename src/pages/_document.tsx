import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link href="https://api.fontshare.com/v2/css?f[]=general-sans@1&display=swap" rel={"stylesheet"} as={"style"} />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};