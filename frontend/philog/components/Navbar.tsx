import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { useNavIdx } from "../hooks/useNavIdx";
import { tokenState } from "../states";
import { Color, HeaderHeight, MediaSize, PageObj } from "../utils/constant";
import NavTab from "./NavTab";

interface NavbarProps {
  showNav: boolean;
}

export default function Navbar({ showNav }: NavbarProps) {
  const navIdx = useNavIdx();
  const token = useRecoilValue(tokenState);
  return (
    <NavContainer>
      <NavList toggle={showNav}>
        <NavTab title={PageObj.Profile}></NavTab>
        <NavTab title={PageObj.Tech}></NavTab>
        <NavTab title={PageObj.Photo}></NavTab>
        <NavTab title={PageObj.Diet}></NavTab>
        {token ? (
          <NavTab title={PageObj.Logout}></NavTab>
        ) : (
          <NavTab title={PageObj.Login}></NavTab>
        )}
      </NavList>

      <Indicator navIdx={navIdx} />
    </NavContainer>
  );
}

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
    background-color: ${Color.white};
    border-bottom: 1px solid ${Color.black};
    border-radius: 0 0 20px 20px;
    width: 100%;
    padding: 0;
    background-color: ${(props) => props.theme.primary};
    border-bottom: 1px solid ${(props) => props.theme.secondary};
  }
`;
