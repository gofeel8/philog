import { useState } from "react";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { whiteTheme, darkTheme } from "../utils/constant";
import { RecoilRoot } from "recoil";
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  const [isDarkMode, setDarkMode] = useState(false);
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <ThemeProvider theme={isDarkMode ? darkTheme : whiteTheme}>
          <Layout setDarkMode={setDarkMode} isDarkMode={isDarkMode}>
            <GlobalStyle theme={isDarkMode ? darkTheme : whiteTheme} />
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </RecoilRoot>
    </QueryClientProvider>
  );
}

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
