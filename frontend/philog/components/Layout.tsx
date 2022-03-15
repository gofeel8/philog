import Header from "./Header";
import styled from "styled-components";
import { HeaderHeight } from "../utils/constant";
import { Dispatch, SetStateAction, useEffect } from "react";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

interface LayoutProps {
  children: React.ReactNode;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
  isDarkMode: boolean;
}

const Content = styled.div`
  margin-top: ${HeaderHeight}px;
  margin-left: 10vw;
  margin-right: 10vw;
`;

const modeState = atom({
  key: "modeState", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});

export default function Layout({
  children,
  setDarkMode,
  isDarkMode,
}: LayoutProps) {
  const [mode, setMode] = useRecoilState(modeState);

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
