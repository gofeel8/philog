import axios from "axios";
import { GetServerSideProps } from "next";
import styled from "styled-components";
import TechLayout from "../../../components/TechLayout";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Viewer } from "@toast-ui/react-editor";

interface IDetail {
  seq: number;
  category: string;
  title: string;
  content: string;
  createdAt: string;
}

export default function Detail({
  seq,
  category,
  title,
  content,
  createdAt,
}: IDetail) {
  return (
    <TechLayout title={title}>
      <Container>
        <PostTitle>{title}</PostTitle>
        <PostDate>{new Date(createdAt).toLocaleString("ko-KR")}</PostDate>
        <Viewer initialValue={content} />
      </Container>
    </TechLayout>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const id = params?.id;
  const res = await axios(`${process.env.SERVER_URL}/api/board/${id}`);
  const { data } = res;
  console.log(data);
  if (!data) {
    return {
      notFound: true,
    };
  }
  return { props: data };
};

const PostTitle = styled.div`
  font-size: 30px;
  padding: 10px;
`;
const PostDate = styled.div`
  text-align: right;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
