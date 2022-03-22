import Header from "./Header";
import styled from "styled-components";
import { HeaderHeight } from "../utils/constant";
import { Dispatch, SetStateAction, useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { modeState, userState } from "../states";
import axios from "axios";
import React from "react";

interface AppProps {
  children: React.ReactNode;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
  isDarkMode: boolean;
  isLogin: boolean;
}

const Content = styled.div`
  margin-top: ${HeaderHeight}px;
  margin-left: 10vw;
  margin-right: 10vw;
`;

export default React.memo(function App({
  children,
  setDarkMode,
  isDarkMode,
  isLogin,
}: AppProps) {
  const setMode = useSetRecoilState(modeState);
  const [user, setUser] = useRecoilState(userState);
  useEffect(() => {
    if (isLogin) {
      axios.defaults.withCredentials = true;
      axios.get("/api/auth/checkToken").then(({ data }) => {
        setUser(data.userId);
      });
    }
  }, []);

  useEffect(() => {
    setMode(isDarkMode);
  }, [isDarkMode, setMode]);

  return (
    <>
      <Header
        isLogin={isLogin || user ? true : false}
        setDarkMode={setDarkMode}
        isDarkMode={isDarkMode}
      />
      <Content>{children}</Content>
    </>
  );
});
