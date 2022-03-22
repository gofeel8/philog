import axios from "axios";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { useMutation } from "react-query";
import { UserContext } from "./_app";
export default function Component() {
  const { setCurrentUser } = useContext(UserContext);
  const router = useRouter();

  const logoutUser = async () => {
    await axios.post("/api/auth/logout");
  };

  const { mutate } = useMutation(logoutUser, {
    onSuccess: () => {
      setCurrentUser("");
      router.push("/");
    },
  });

  useEffect(() => {
    mutate();
  });
  return <></>;
}
