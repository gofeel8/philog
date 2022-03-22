import { useState } from "react";
import type { AppProps } from "next/app";
import AppLayout from "../components/App";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { whiteTheme, darkTheme } from "../utils/constant";
import { RecoilRoot } from "recoil";
import { QueryClientProvider, QueryClient } from "react-query";
import App from "next/app";

const queryClient = new QueryClient();

interface MyAppProps extends AppProps {
  jwt: string;
}

function MyApp({ pageProps, Component, jwt }: MyAppProps) {
  const [isDarkMode, setDarkMode] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <ThemeProvider theme={isDarkMode ? darkTheme : whiteTheme}>
          <AppLayout
            isLogin={jwt ? true : false}
            setDarkMode={setDarkMode}
            isDarkMode={isDarkMode}
          >
            <GlobalStyle theme={isDarkMode ? darkTheme : whiteTheme} />
            <Component {...pageProps} />
          </AppLayout>
        </ThemeProvider>
      </RecoilRoot>
    </QueryClientProvider>
  );
}

MyApp.getInitialProps = async (appContext: any) => {
  const appProps = await App.getInitialProps(appContext);
  const jwt = appContext?.ctx?.req?.cookies?.jwt;
  console.log(jwt);
  return { ...appProps, jwt };
};

const GlobalStyle = createGlobalStyle<any>`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    background-color: ${(props) => props.theme.primary};
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  * {
    box-sizing: border-box;
  }
  ol, ul { list-style:none;margin:0;padding:0 };
`;

export default MyApp;
