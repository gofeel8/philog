import Header from "./Header";
import SideBar from "./SideBar";
import styled from "styled-components";
import { HeaderHeight } from "../utils/constant";
import { Dispatch, SetStateAction } from "react";

interface LayoutProps {
  children: React.ReactNode;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
  isDarkMode: boolean;
}

const Content = styled.div`
  margin-top: ${HeaderHeight}px;
`;

export default function Layout({
  children,
  setDarkMode,
  isDarkMode,
}: LayoutProps) {
  return (
    <>
      <Header setDarkMode={setDarkMode} isDarkMode={isDarkMode} />

      <Content>
        <SideBar />
        {children}
      </Content>
    </>
  );
}
