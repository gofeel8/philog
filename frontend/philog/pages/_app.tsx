import { useState } from "react";
import type { AppProps } from "next/app";
import AppLayout from "../components/App";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { whiteTheme, darkTheme } from "../utils/constant";
import { RecoilRoot } from "recoil";
import { QueryClientProvider, QueryClient } from "react-query";
import { createContext } from "react";
import axios from "axios";

interface MyAppProps extends AppProps {
  isInit: boolean;
  userId: string;
}

export const UserContext = createContext({
  user: "",
  setCurrentUser: (userId: string) => {},
});
function MyApp({ pageProps, Component, userId }: MyAppProps) {
  const [isDarkMode, setDarkMode] = useState(false);
  const [user, setUser] = useState(userId);
  const queryClient = new QueryClient();
  const setCurrentUser = (userId: string) => {
    setUser(userId);
  };

  return (
    <UserContext.Provider value={{ user, setCurrentUser }}>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <ThemeProvider theme={isDarkMode ? darkTheme : whiteTheme}>
            <AppLayout
              isLogin={user ? true : false}
              setDarkMode={setDarkMode}
              isDarkMode={isDarkMode}
            >
              <GlobalStyle theme={isDarkMode ? darkTheme : whiteTheme} />
              <Component {...pageProps} />
            </AppLayout>
          </ThemeProvider>
        </RecoilRoot>
      </QueryClientProvider>
    </UserContext.Provider>
  );
}

MyApp.getInitialProps = async (appContext: any) => {
  let isServer = process.browser ? false : true;
  if (isServer) {
    const jwt = appContext?.ctx?.req?.cookies?.jwt;
    try {
      const { data } = await axios.get(
        `${process.env.SERVER_URL}/api/auth/checkToken`,
        {
          withCredentials: true,
          headers: {
            Cookie: `jwt=${jwt}`,
          },
        }
      );
      return { userId: data.userId };
    } catch {
      return { userId: "" };
    }
  } else {
    return {};
  }
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
