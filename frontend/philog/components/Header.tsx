import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { MediaSize, Color, HeaderHeight, PageObj } from "../utils/constant";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Link from "next/link";
import NavTab from "./NavTab";
import { useNavIdx } from "../hooks/useNavIdx";
interface HeaderProps {
  setDarkMode: Dispatch<SetStateAction<boolean>>;
  isDarkMode: boolean;
}

export default function Navbar({ setDarkMode, isDarkMode }: HeaderProps) {
  const [showNav, setShowNav] = useState(false);
  const navIdx = useNavIdx();

  return (
    <>
      <Header>
        <Link href="/" passHref={true}>
          <Logo>Philog</Logo>
        </Link>
        <NavContainer>
          <NavList toggle={showNav}>
            <NavTab title={PageObj.Profile}></NavTab>
            <NavTab title={PageObj.Tech}></NavTab>
            <NavTab title={PageObj.Photo}></NavTab>
            <NavTab title={PageObj.Diet}></NavTab>
            <NavTab title={PageObj.Login}></NavTab>
          </NavList>
          <Indicator navIdx={navIdx} />
        </NavContainer>
        <BtnContainer>
          <ThemeBtn onClick={() => setDarkMode((prev) => !prev)}>
            <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
          </ThemeBtn>
          <Button onClick={() => setShowNav((prev) => !prev)}>
            <FontAwesomeIcon icon={faBars} />
          </Button>
        </BtnContainer>
      </Header>
    </>
  );
}

const BtnContainer = styled.div`
  display: flex;
`;

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
  color: ${(props) => props.theme.secondary};
`;

const Logo = styled.a`
  @media only screen and (max-width: ${MediaSize}px) {
    text-align: center;
  }
`;

const NavContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const Indicator = styled.div<{ navIdx: number }>`
  width: 80px;
  display: ${({ navIdx }) => (navIdx >= 0 ? "block" : "none")};
  margin-right: ${({ navIdx }) =>
    navIdx >= 0 && `calc(320px - 80px * ${navIdx});`};
  border: 1px solid ${Color.lightGray};
  transition: all ease 0.5s 0s;
  @media only screen and (max-width: ${MediaSize}px) {
    display: none;
  }
`;

const NavList = styled.ul<{ toggle: boolean }>`
  justify-content: space-between;
  display: flex;
  align-items: flex-end;
  width: 400px;
  margin: 0;
  padding: 0;
  @media only screen and (max-width: ${MediaSize}px) {
    display: ${({ toggle }) => (toggle ? "block" : "none")};
    position: absolute;
    top: ${HeaderHeight}px;
    left: 0;
    margin: 0;
    background-color: white;
    border-bottom: 1px solid black;
    border-radius: 0 0 20px 20px;
    width: 100%;
    padding: 0;
    background-color: ${(props) => props.theme.primary};
    border-bottom: 1px solid ${(props) => props.theme.secondary};
  }
`;

const Button = styled.button`
  display: none;
  font-size: 30px;
  width: 40px;
  color: ${(props) => props.theme.secondary};
  border-radius: 50%;
  border: none;
  margin: 10px;
  border: 1px solid transparent;
  cursor: pointer;
  background-color: transparent;
  @media only screen and (max-width: ${MediaSize}px) {
    display: block;
  }
`;

const ThemeBtn = styled(Button)`
  @media only screen and (min-width: ${MediaSize}px) {
    display: block;
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 60px;
    height: 60px;
    &:hover {
      border: 1px solid ${(props) => props.theme.secondary}; 
      box-shadow: 1px 1px 4px ${(props) => props.theme.secondary};
  }
`;
