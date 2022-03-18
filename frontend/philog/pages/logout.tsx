import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { tokenState } from "../states";
export default function Component() {
  const router = useRouter();
  const setToken = useSetRecoilState(tokenState);
  useEffect(() => {
    localStorage.removeItem("jwt");
    setToken(null);
    router.push("/");
  });
  return <></>;
}
