import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { MediaSize, Color, HeaderHeight } from "../utils/constant";
import { useState } from "react";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;
  width: 100%;
  height: ${HeaderHeight}px;
  padding: 0 12vw;
`;

const Logo = styled.p`
  @media only screen and (max-width: ${MediaSize}px) {
    text-align: center;
  }
`;

const NavList = styled.ul<any>`
  @media only screen and (max-width: ${MediaSize}px) {
    display: ${({ toggle }) => {
      return toggle ? "black" : "none";
    }};
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
  text-align: center;
  cursor: pointer;
  &:hover {
    background-color: ${Color.lightGray};
  }
  @media only screen and (max-width: ${MediaSize}px) {
    float: initial;
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

export default function NavBar() {
  const [showNav, setShowNav] = useState(false);
  return (
    <>
      <Header>
        <Logo>Philog</Logo>
        <NavList toggle={showNav}>
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
