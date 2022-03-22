import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor/dist/theme/toastui-editor-dark.css";
import styled from "styled-components";
import { Color } from "../../utils/constant";
import WysiwygEditor from "../../components/ToastEditor";
import { useState } from "react";
import { useMutation, useQuery } from "react-query";
import axios from "axios";
import { useRouter } from "next/router";

interface IBoard {
  category: string;
  title: string;
  content: string;
}

export default function Component() {
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();
  useQuery("checkJWT", () => axios.get("/api/auth/checkToken"), {
    retry: false,
    refetchOnWindowFocus: false,
    onError: (error) => {
      alert("로그인이 필요합니다");
      router.push("/");
    },
  });

  const clickSave = () => {
    mutate({ category, title, content });
  };

  const writeBoard = async (board: IBoard) => {
    const { data } = await axios.post("/api/board", board);
    return data;
  };

  const { mutate, isLoading } = useMutation(writeBoard, {
    onSuccess: () => {
      router.push("/tech");
    },
  });

  const changeHandler = (content: string) => {
    setContent(content);
  };
  return (
    <Container>
      {isLoading ? (
        <></>
      ) : (
        <>
          <Header>
            <Information>
              <Category
                placeholder="Category"
                value={category}
                onChange={(event) => {
                  setCategory(event.target.value);
                }}
              ></Category>
              <Title
                placeholder="Title"
                value={title}
                onChange={(event) => {
                  setTitle(event.target.value);
                }}
              ></Title>
            </Information>
            <Button onClick={clickSave}>Save</Button>
          </Header>
          <EditorWrapper>
            <WysiwygEditor
              onChange={changeHandler}
              previewStyle="tab"
              height="70vh"
              initialEditType="markdown"
              useCommandShortcut={true}
            />
          </EditorWrapper>
        </>
      )}
    </Container>
  );
}

const EditorWrapper = styled.div`
  background-color: white;
`;

const Button = styled.button`
  border: 1px solid ${Color.lightGray};
  color: ${Color.gray};
  background-color: transparent;
  border-radius: 10px;
  cursor: pointer;
  height: 40px;
  &:hover {
    background-color: ${Color.lightGray};
  }
`;

const Information = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 55px;
  justify-content: space-between;
`;

const Title = styled.input`
  width: 70%;
`;
const Category = styled.input`
  width: 30%;
  max-width: 150px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  & input {
    border: none;
    border-bottom: 1px solid ${Color.lightGray};
    background-color: transparent;
    color: ${(props) => props.theme.secondary};
    & :focus {
      outline: none;
      border-bottom: 1px solid ${Color.gray};
    }
  }
`;

const Container = styled.div`
  margin-top: 100px;
`;
