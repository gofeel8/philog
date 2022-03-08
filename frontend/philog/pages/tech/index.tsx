import Seo from "../../components/Seo";
import Sidebar from "../../components/Sidebar";
import PostList from "../../components/PostList";
import styled from "styled-components";

export default function Tech() {
  return (
    <TechContainer>
      <Seo title="Philog" />
      <Sidebar />
      <PostList />
    </TechContainer>
  );
}

const TechContainer = styled.div`
  margin-top: 100px;
  display: flex;
`;
