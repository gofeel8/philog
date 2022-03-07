import { useRouter } from "next/router";
import { useState, useEffect } from "react";

interface PathObj {
  [index: string]: number;
}

export const useNavIdx = () => {
  const [navIdx, setNavIdx] = useState(-1);
  const router = useRouter();

  useEffect(() => {
    let path: string = router.pathname.split("/")[1];
    const pathObj: PathObj = {
      profile: 0,
      tech: 1,
      photo: 2,
      diet: 3,
      login: 4,
    };
    let idx: number = -1;
    if (pathObj.hasOwnProperty(path)) idx = pathObj[path];
    if (idx !== navIdx) setNavIdx(idx);
  }, [router.pathname, navIdx]);

  return navIdx;
};
