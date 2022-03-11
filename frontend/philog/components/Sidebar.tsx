import styled from "styled-components";
import { Color, MediaSize } from "../utils/constant";
export default function Sidebar() {
  return (
    <SideContainer>
      <SideList>
        <SideItem selected={true}>전체보기(52)</SideItem>
        <SideItem selected={false}>게시글1(3)</SideItem>
        <SideItem selected={false}>게시글2(5)</SideItem>
        <SideItem selected={false}>게시글3(34)</SideItem>
        <SideItem selected={false}>게시글4(23)</SideItem>
        <SideItem selected={false}>게시글5(1)</SideItem>
      </SideList>
    </SideContainer>
  );
}

const SideContainer = styled.div`
  width: 180px;
  @media only screen and (max-width: ${MediaSize}px) {
    display: none;
  }
`;

const SideList = styled.ul`
  padding: 15px;
`;

const SideItem = styled.li<{ selected: boolean }>`
  padding: 3px;
  cursor: pointer;
  color: ${({ selected, theme }) =>
    selected ? theme.secondary : Color.lightGray};

  &:hover {
    color: ${Color.gray};
  }
`;
