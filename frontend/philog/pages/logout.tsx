import axios from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useMutation } from "react-query";
import { useSetRecoilState } from "recoil";
import { userState } from "../states";
export default function Component() {
  const router = useRouter();
  const setUser = useSetRecoilState(userState);

  const logoutUser = async () => {
    axios.defaults.withCredentials = true;
    await axios.post("http://localhost:3300/auth/logout");
  };

  const { mutate } = useMutation(logoutUser, {
    onSuccess: () => {
      setUser(null);
      router.push("/");
    },
  });

  useEffect(() => {
    mutate();
  });
  return <></>;
}
