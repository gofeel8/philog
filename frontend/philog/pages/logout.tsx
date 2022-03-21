import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { userState } from "../states";
export default function Component() {
  const router = useRouter();
  const setUser = useSetRecoilState(userState);
  useEffect(() => {
    //캐시 지워야하는디..
    setUser(null);
    router.push("/");
  });
  return <></>;
}
