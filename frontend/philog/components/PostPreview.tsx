import { useRouter } from "next/router";
import styled from "styled-components";
import { Color } from "../utils/constant";

interface IPreview {
  seq: number;
  title: string;
  content: string;
  date: Date;
}

export default function Preview({ seq, title, content, date }: IPreview) {
  const router = useRouter();
  const clickHandler = () => {
    router.push(`detail/${seq}`);
  };
  return (
    <Container onClick={clickHandler}>
      <Title>{title}</Title>
      <Content>{content}</Content>
      <Date>{date.toLocaleString()}</Date>
    </Container>
  );
}

const Container = styled.div`
  border-bottom: 0.3px solid ${(props) => props.theme.secondary};
  padding: 10px;
  margin-left: 10px;
  margin-bottom: 60px;
  color: ${(props) => props.theme.secondary};
  cursor: pointer;
  &:hover {
    background-color: ${Color.lightGray};
  }
`;

const Title = styled.p`
  margin: 10px;
  font-size: 20px;
`;

const Content = styled.p`
  margin: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  text-align: left;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const Date = styled.p`
  text-align: end;
  padding-right: 10px;
`;
