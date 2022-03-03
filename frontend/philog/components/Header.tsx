import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { MediaSize, Color, HeaderHeight } from "../utils/constant";
import { useState } from "react";

export default function NavBar() {
  const [showNav, setShowNav] = useState(false);
  return (
    <>
      <Header>
        <Logo>Philog</Logo>
        <NavList toggle={showNav}>
          <NavItem>Intro</NavItem>
          <NavItem>Tech</NavItem>
          <NavItem>Photo</NavItem>
          <NavItem>Diet</NavItem>
          <NavItem>Login</NavItem>
        </NavList>
        <Hamburger onClick={() => setShowNav((prev) => !prev)}>
          <FontAwesomeIcon icon={faBars} />
        </Hamburger>
      </Header>
    </>
  );
}

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;
  width: 100%;
  height: ${HeaderHeight}px;
  padding: 0 12vw;
  font-size: 1.2rem;
`;

const Logo = styled.p`
  @media only screen and (max-width: ${MediaSize}px) {
    text-align: center;
  }
`;

const NavList = styled.ul<{ toggle: boolean }>`
  @media only screen and (max-width: ${MediaSize}px) {
    display: ${({ toggle }) => (toggle ? "black" : "none")};
    position: absolute;
    top: ${HeaderHeight}px;
    left: 0;
    margin: 0;
    background-color: white;
    border-bottom: 1px solid black;
    border-radius: 0 0 20px 20px;
    width: 100%;
    padding: 0;
  }
`;

const NavItem = styled.li`
  float: left;
  padding: 10px;
  margin: 5px;
  text-align: center;
  cursor: pointer;
  &:hover {
    border-radius: 10px;
    background-color: ${Color.lightGray};
  }
  &:nth-child(1) {
    border-bottom: 1px solid ${Color.gray};
  }

  @media only screen and (max-width: ${MediaSize}px) {
    float: initial;
    margin: 0;
    &:hover {
      border-radius: 0px;
    }
    &:nth-child(1) {
      border-bottom: none;
    }
    &:nth-last-child(1) {
      border-radius: 0 0 20px 20px;
    }
  }
`;

const Hamburger = styled.button`
  display: none;
  @media only screen and (max-width: ${MediaSize}px) {
    display: block;
  }
`;
