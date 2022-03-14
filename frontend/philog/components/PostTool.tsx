import styled from "styled-components";
import { Color, MediaSize } from "../utils/constant";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faPen } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function PostTool() {
  return (
    <Container>
      <FlexContainer>
        <Select>
          <option value="">전체보기</option>
          <option value="">게시글1(3)</option>
          <option value="">게시글2(5)</option>
          <option value="">게시글3(3)</option>
        </Select>
        <SearchBar>
          <input placeholder="검색어를 입력하세요"></input>
          <button>
            <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
          </button>
        </SearchBar>
      </FlexContainer>
      <WriteBtn>
        <Link href={"/write"} passHref={true}>
          <a>
            <FontAwesomeIcon icon={faPen}></FontAwesomeIcon>
          </a>
        </Link>
      </WriteBtn>
    </Container>
  );
}

const FlexContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  @media only screen and (max-width: ${MediaSize}px) {
    justify-content: space-between;
  }
`;

const Select = styled.select`
  display: none;
  width: 100px;
  margin-bottom: 10px;
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.secondary};
  @media only screen and (max-width: ${MediaSize}px) {
    display: block;
  }
  &:focus {
    outline: none;
  }
`;

const WriteBtn = styled.button`
  position: absolute;
  right: 30px;
  top: 140px;
  width: 50px;
  height: 50px;
  font-size: 20px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.secondary};
  background-color: transparent;
  &:hover {
    border: 1px solid ${Color.gray};
  }
`;

const SearchBar = styled.div`
  border-bottom: 1px solid ${Color.gray};
  width: 50%;
  max-width: 300px;
  height: 30px;
  display: flex;

  & input {
    flex-grow: 1;
    width: 100%;
    border: none;
    outline: none;
    background-color: transparent;
    color: ${({ theme }) => theme.secondary};
  }

  & button {
    background-color: transparent;
    border: none;
    width: 40px;
    cursor: pointer;
    color: ${({ theme }) => theme.secondary};
    &:hover {
      border-radius: 30px;
      background-color: ${Color.lightGray};
    }
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-bottom: 20px;
  justify-content: space-between;
  color: ${(props) => props.theme.secondary};
`;
