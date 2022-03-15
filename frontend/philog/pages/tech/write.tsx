import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor/dist/theme/toastui-editor-dark.css";
import styled from "styled-components";
import { Color } from "../../utils/constant";
import WysiwygEditor from "../../components/ToastEditor";

export default function Component() {
  const clickSave = () => {
    console.log("click");
  };
  const changeHandler = (content: string) => {
    console.log(content);
  };
  return (
    <Container>
      <Header>
        <Information>
          <Category placeholder="Category"></Category>
          <Title placeholder="Title"></Title>
        </Information>
        <Button onClick={clickSave}>Save</Button>
      </Header>
      <EditorWrapper>
        <WysiwygEditor
          onChange={changeHandler}
          previewStyle="tab"
          height="570px"
          initialEditType="markdown"
          useCommandShortcut={true}
        />
      </EditorWrapper>
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
