import "~styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Execo66</title>
        <meta
          name="description"
          content="Making life easier for CS teachers and students"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
