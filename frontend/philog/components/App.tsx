import Header from "./Header";
import styled from "styled-components";
import { HeaderHeight } from "../utils/constant";
import { Dispatch, SetStateAction, useContext, useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { modeState } from "../states";
import React from "react";
import { UserContext } from "../pages/_app";

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
  const { user } = useContext(UserContext);

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
