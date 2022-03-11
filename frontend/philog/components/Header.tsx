import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { MediaSize, HeaderHeight } from "../utils/constant";
import { Dispatch, SetStateAction, useState } from "react";
import Link from "next/link";
import Navbar from "./Navbar";
interface HeaderProps {
  setDarkMode: Dispatch<SetStateAction<boolean>>;
  isDarkMode: boolean;
}

export default function Header({ setDarkMode, isDarkMode }: HeaderProps) {
  const [showNav, setShowNav] = useState(false);

  return (
    <>
      <HeaderContainer>
        <Link href="/" passHref={true}>
          <Logo>Philog</Logo>
        </Link>
        <Navbar showNav={showNav}></Navbar>
        <BtnContainer>
          <ThemeBtn onClick={() => setDarkMode((prev) => !prev)}>
            <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
          </ThemeBtn>
          <Button onClick={() => setShowNav((prev) => !prev)}>
            <FontAwesomeIcon icon={faBars} />
          </Button>
        </BtnContainer>
      </HeaderContainer>
    </>
  );
}

const BtnContainer = styled.div`
  display: flex;
`;

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;
  width: calc(100vw - 17px);
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
  @media only screen and (min-width: ${MediaSize + 1}px) {
    display: block;
    position: fixed;
    bottom: 20px;
    left:  90vw;
    width: 60px;
    height: 60px;
    &:hover {
      border: 1px solid ${(props) => props.theme.secondary}; 
      box-shadow: 1px 1px 4px ${(props) => props.theme.secondary};
  }
`;
