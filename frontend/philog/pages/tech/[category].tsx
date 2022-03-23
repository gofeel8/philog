import Seo from "../../components/Seo";
import Sidebar from "../../components/Sidebar";
import PostList from "../../components/PostList";
import styled from "styled-components";
import PostTool from "../../components/PostTool";

export default function Category() {
  return (
    <TechContainer>
      <Seo title="Philog" />
      <Sidebar />
      <PostContainer>
        <PostTool></PostTool>
        <PostList />
      </PostContainer>
    </TechContainer>
  );
}

const TechContainer = styled.div`
  margin-top: 100px;
  display: flex;
`;

const PostContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;
