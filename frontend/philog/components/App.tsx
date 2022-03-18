import Header from "./Header";
import styled from "styled-components";
import { HeaderHeight } from "../utils/constant";
import { Dispatch, SetStateAction, useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { modeState, tokenState } from "../states";
import axios from "axios";

interface AppProps {
  children: React.ReactNode;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
  isDarkMode: boolean;
}

const Content = styled.div`
  margin-top: ${HeaderHeight}px;
  margin-left: 10vw;
  margin-right: 10vw;
`;

export default function App({ children, setDarkMode, isDarkMode }: AppProps) {
  const setMode = useSetRecoilState(modeState);
  const [token, setToken] = useRecoilState(tokenState);
  useEffect(() => {
    if (!token) {
      const jwt = localStorage.getItem("jwt");
      if (jwt) {
        axios
          .get("http://localhost:3300/auth/checkToken", {
            headers: { Authorization: `Bearer ${jwt}` },
          })
          .then(() => setToken(jwt))
          .catch(() => {
            localStorage.removeItem("jwt");
          });
      }
    }
  }, []);

  useEffect(() => {
    setMode(isDarkMode);
  }, [isDarkMode, setMode]);

  return (
    <>
      <Header setDarkMode={setDarkMode} isDarkMode={isDarkMode} />
      <Content>{children}</Content>
    </>
  );
}
