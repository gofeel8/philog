import styled from "styled-components";
import Preview from "./PostPreview";

export default function PostList() {
  return (
    <Container>
      <Preview></Preview>
      <Preview></Preview>
      <Preview></Preview>
      <Preview></Preview>
      <Preview></Preview>
      <Preview></Preview>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  padding: 10px;
`;
