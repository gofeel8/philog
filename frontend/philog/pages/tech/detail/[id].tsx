import axios from "axios";
import { GetServerSideProps } from "next";
import { useEffect } from "react";

interface IDetail {
  seq: number;
  category: string;
  title: string;
  content: string;
  createdAt: Date;
}

export default function Detail({
  seq,
  category,
  title,
  content,
  createdAt,
}: IDetail) {
  return <div>{content}</div>;
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
