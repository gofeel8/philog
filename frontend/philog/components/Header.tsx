import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { MediaSize, Color, HeaderHeight } from "../utils/constant";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
interface HeaderProps {
  setDarkMode: Dispatch<SetStateAction<boolean>>;
  isDarkMode: boolean;
}
export default function Navbar({ setDarkMode, isDarkMode }: HeaderProps) {
  const [showNav, setShowNav] = useState(false);
  const router = useRouter();
  useEffect(() => {
    console.log(router);
  });
  return (
    <>
      <Header>
        <Logo>Philog</Logo>
        <NavList toggle={showNav}>
          <Link href="/">
            <NavItem>
              <a>Intro</a>
            </NavItem>
          </Link>
          <Link href="/tech" passHref={true}>
            <NavItem>
              <a>Tech</a>
            </NavItem>
          </Link>
          <Link href="/photo" passHref={true}>
            <NavItem>
              <a>Photo</a>
            </NavItem>
          </Link>
          <Link href="/diet" passHref={true}>
            <NavItem>
              <a>Diet</a>
            </NavItem>
          </Link>
          <Link href="/login" passHref={true}>
            <NavItem>
              <a>Login</a>
            </NavItem>
          </Link>
        </NavList>
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

const Logo = styled.p`
  @media only screen and (max-width: ${MediaSize}px) {
    text-align: center;
  }
`;

const NavList = styled.ul<{ toggle: boolean }>`
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
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
