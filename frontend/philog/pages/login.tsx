import axios from "axios";
import { FormEvent, useState } from "react";
import { useMutation } from "react-query";
import styled from "styled-components";
import Seo from "../components/Seo";
import { Color } from "../utils/constant";
import { tokenState } from "../states";
import { useSetRecoilState } from "recoil";
import { useRouter } from "next/router";
interface LoginInfo {
  userId: string;
  password: string;
}

export default function Login() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const setToken = useSetRecoilState(tokenState);
  const router = useRouter();

  const LoginHandler = (event: FormEvent) => {
    mutate({ userId: id, password: password });
    event.preventDefault();
  };

  const loginUser = async (user: LoginInfo) => {
    axios.defaults.withCredentials = true;
    const { data } = await axios.post("http://localhost:3300/auth/login", user);
    return data;
  };

  const { mutate, isLoading } = useMutation(loginUser, {
    onSuccess: ({ accessToken }) => {
      setToken(accessToken);
      localStorage.setItem("jwt", accessToken);
      router.push("/");
    },
    onError: () => {
      alert("Who are you?");
    },
  });

  return (
    <Container>
      <Seo title="Philog" />
      <LoginWrapper>
        {isLoading ? (
          <>Checking...</>
        ) : (
          <form onSubmit={LoginHandler}>
            <Label>
              Admin ID:
              <input
                type="text"
                value={id}
                onChange={({ target }) => setId(target.value)}
              />
            </Label>
            <Label>
              Password:
              <input
                type="password"
                value={password}
                onChange={({ target }) => setPassword(target.value)}
              />
            </Label>
            <Submit type="submit" value="Login" />
          </form>
        )}
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
  color: ${(props) => props.theme.secondary};
`;

const LoginWrapper = styled.div`
  margin-top: 100px;
  width: 240px;
  height: 240px;
  padding: 30px;
  border: 1px solid ${(props) => props.theme.secondary};
  border-radius: 10px;
`;
