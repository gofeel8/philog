import { FormEvent, useState } from "react";
import styled from "styled-components";
import Seo from "../components/Seo";
import { Color } from "../utils/constant";

export default function Login() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const LoginHandler = (event: FormEvent) => {
    console.log(id);
    console.log(password);
    event.preventDefault();
  };

  return (
    <Container>
      <Seo title="Philog" />
      <LoginWrapper>
        <form onSubmit={LoginHandler}>
          <Label>
            Admin ID:
            <input
              type="text"
              name="id"
              value={id}
              onChange={({ target }) => setId(target.value)}
            />
          </Label>
          <Label>
            Password:
            <input
              type="password"
              name="password"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
          </Label>
          <Submit type="submit" value="Login" />
        </form>
      </LoginWrapper>
    </Container>
  );
}

const Submit = styled.input`
  position: relative;
  margin-top: 10px;
  width: 100%;
  height: 30px;
  border: 1px solid ${(props) => props.theme.secondary};
  border-radius: 10px;
  background-color: transparent;
  color: ${(props) => props.theme.secondary};
  cursor: pointer;
  &:hover {
    background-color: ${Color.lightGray};
  }
`;

const Label = styled.label`
  color: ${(props) => props.theme.secondary};
  & input {
    width: 100%;
    margin-bottom: 20px;
    margin-top: 10px;
    border: none;
    border-bottom: 1px solid ${(props) => props.theme.secondary};
    background-color: transparent;
    color: ${(props) => props.theme.secondary};
    &:focus {
      outline: none;
    }
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 90vh;
`;

const LoginWrapper = styled.div`
  margin-top: 100px;
  width: 240px;
  height: 240px;
  padding: 30px;
  border: 1px solid ${(props) => props.theme.secondary};
  border-radius: 10px;
`;
