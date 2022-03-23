import axios from "axios";
import { useEffect } from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import Preview from "./PostPreview";

interface IPreview {
  seq: number;
  title: string;
  content: string;
  createdAt: Date;
}

export default function PostList() {
  const { data, isLoading } = useQuery("getPostList", async () => {
    const response = await axios.get("/api/board");
    return response.data;
  });
  return (
    <Container>
      {isLoading ? (
        <>loading...</>
      ) : (
        data.map((item: IPreview) => (
          <Preview
            key={item.seq}
            seq={item.seq}
            title={item.title}
            content={item.content}
            date={new Date(item.createdAt)}
          ></Preview>
        ))
      )}
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  padding: 10px;
`;
