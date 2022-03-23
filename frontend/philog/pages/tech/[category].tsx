import PostList from "../../components/PostList";
import styled from "styled-components";
import PostTool from "../../components/PostTool";
import TechLayout from "../../components/TechLayout";

export default function Category() {
  return (
    <TechLayout title="TechBlog">
      <PostContainer>
        <PostTool></PostTool>
        <PostList />
      </PostContainer>
    </TechLayout>
  );
}

const PostContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;
