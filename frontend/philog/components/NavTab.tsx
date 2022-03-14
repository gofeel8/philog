import Link from "next/link";
import styled from "styled-components";
import { MediaSize } from "../utils/constant";

interface NavTabProps {
  title: string;
}

export default function NavTab({ title }: NavTabProps) {
  return (
    <Link href={`/${title.toLowerCase()}`} passHref={true}>
      <NavItem>
        <a>{title}</a>
      </NavItem>
    </Link>
  );
}

const NavItem = styled.li`
  float: left;
  padding: 10px;
  text-align: center;
  width: 80px;
  cursor: pointer;

  @media only screen and (max-width: ${MediaSize}px) {
    float: initial;
    margin: 0;
    width: 100%;
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
