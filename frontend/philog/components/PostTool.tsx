import styled from "styled-components";
import { Color } from "../utils/constant";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faPen } from "@fortawesome/free-solid-svg-icons";

export default function PostTool() {
  return (
    <Container>
      <div></div>
      <SearchBar>
        <input placeholder="검색어를 입력하세요"></input>
        <button>
          <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
        </button>
      </SearchBar>
      <WriteBtn>
        <FontAwesomeIcon icon={faPen}></FontAwesomeIcon>
      </WriteBtn>
    </Container>
  );
}

const WriteBtn = styled.button`
  width: 40px;
  height: 40px;
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
  margin-bottom: 20px;
  justify-content: space-between;
  color: ${(props) => props.theme.secondary};
`;
