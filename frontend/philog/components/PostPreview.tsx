import styled from "styled-components";
import { Color } from "../utils/constant";

export default function Preview() {
  return (
    <Container>
      <Title>리액트 학습 정리</Title>
      <Content>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit minima
        explicabo maxime porro numquam ratione! Sint nam consectetur, sequi
        ratione facere ut veritatis ea ipsa vel, veniam dolore nulla totam.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit minima
        explicabo maxime porro numquam ratione! Sint nam consectetur, sequi
        ratione facere ut veritatis ea ipsa vel, veniam dolore nulla totam.
      </Content>
      <Date>2022/03/11</Date>
    </Container>
  );
}

const Container = styled.div`
  border: 0.3px solid ${(props) => props.theme.secondary};
  border-radius: 20px;
  margin-left: 10px;
  margin-bottom: 30px;
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
