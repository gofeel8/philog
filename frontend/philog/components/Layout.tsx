import Header from "./Header";
import SideBar from "./SideBar";
import styled from "styled-components";
import { HeaderHeight } from "../utils/constant";

interface LayoutProps {
  children: React.ReactNode;
}

const Content = styled.div`
  margin-top: ${HeaderHeight}px;
`;

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />

      <Content>
        <SideBar />
        {children}
      </Content>
    </>
  );
}
