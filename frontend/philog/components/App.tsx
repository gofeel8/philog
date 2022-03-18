import Header from "./Header";
import styled from "styled-components";
import { HeaderHeight } from "../utils/constant";
import { Dispatch, SetStateAction, useEffect } from "react";
import { useRecoilState } from "recoil";
import { modeState } from "../states";

interface AppProps {
  children: React.ReactNode;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
  isDarkMode: boolean;
}

const Content = styled.div`
  margin-top: ${HeaderHeight}px;
  margin-left: 10vw;
  margin-right: 10vw;
`;

export default function App({ children, setDarkMode, isDarkMode }: AppProps) {
  const [mode, setMode] = useRecoilState(modeState);
  useEffect(() => {
    console.log("실행");
  });
  useEffect(() => {
    setMode(isDarkMode);
  }, [isDarkMode, setMode]);

  return (
    <>
      <Header setDarkMode={setDarkMode} isDarkMode={isDarkMode} />
      <Content>{children}</Content>
    </>
  );
}
