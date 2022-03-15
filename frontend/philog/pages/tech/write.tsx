import dynamic from "next/dynamic";
import { useRef } from "react";
import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor/dist/theme/toastui-editor-dark.css";
import { EditorProps } from "@toast-ui/react-editor";
import styled from "styled-components";
import { Color } from "../../utils/constant";

const Editor = dynamic<EditorProps>(
  () => import("@toast-ui/react-editor").then((m) => m.Editor),
  { ssr: false }
);

export default function Component() {
  return (
    <Container>
      <Header>
        <Information>
          <Category placeholder="Category"></Category>
          <Title placeholder="Title"></Title>
        </Information>
        <Button>Save</Button>
      </Header>
      <Editor
        previewStyle="tab"
        height="570px"
        initialEditType="markdown"
        theme="dark"
        useCommandShortcut={true}
      />
    </Container>
  );
}

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
