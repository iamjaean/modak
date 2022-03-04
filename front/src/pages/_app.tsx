import React, { useCallback, useEffect, useMemo } from "react";
import type { AppContext, AppProps } from "next/app";
import { useCookies } from "react-cookie";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "@theme/.";
import cookieParser from "@lib/cookieParser";
import GlobalStyle from "@theme/GlobalStyle";
import DarkModeButton from "@molecules/DarkModeButton";
import AppLayout from "@templates/AppLayout";
import wrapper from "@store/configureStore";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Head from "next/head";

interface Props extends AppProps {
  mode: string;
}

const App = ({ Component, pageProps, mode: modeInCookie }: Props) => {
  const [cookies, setCookies] = useCookies(["mode"]);
  const mode = useMemo(() => cookies.mode || modeInCookie, [cookies.mode, modeInCookie]);

  useEffect(() => {
    if (!cookies.mode) setCookies("mode", "light");
  }, []);

  const onClickDarkMode = useCallback(() => {
    setCookies("mode", mode === "light" ? "dark" : "light");
  }, [mode]);

  return (
    <ThemeProvider theme={mode === "light" ? lightTheme : darkTheme}>
      <Head>
        <title>chanyeong</title>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=yes,viewport-fit=cover"
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="description" content="캠핑인들을 위한 사이트 모닥입니다." />
        <meta name="og:title" content="MODAK" />
        <meta name="og:image" content="/tent.jpeg" />
        <meta name="og:description" content="캠핑인들을 위한 사이트 모닥입니다." />
        <meta property="og:type" content="website" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon-precomposed" href="/favicon.ico" />
      </Head>
      <GlobalStyle theme={mode === "light" ? lightTheme : darkTheme} />
      <AppLayout>
        <Component {...pageProps} />
        <DarkModeButton mode={mode} onClick={onClickDarkMode} />
      </AppLayout>
    </ThemeProvider>
  );
};

App.getInitialProps = async ({ ctx }: AppContext) => {
  const cookies = ctx.req?.headers?.cookie;
  const { mode } = cookieParser(cookies);

  return { mode: mode || "light" };
};

export default wrapper.withRedux(App);
