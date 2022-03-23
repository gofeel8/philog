import React, { ReactChildren, ReactChild } from "react";
import styled from "styled-components";
import Seo from "./Seo";
import Sidebar from "./Sidebar";

interface ILayout {
  children: ReactChild | ReactChildren;
  title: string;
}
export default function Layout({ children, title }: ILayout) {
  return (
    <TechContainer>
      <Seo title={title} />
      <Sidebar />
      {children}
    </TechContainer>
  );
}

const TechContainer = styled.div`
  margin-top: 100px;
  display: flex;
`;
