import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { PageObj } from "../utils/constant";

interface PathIdx {
  [index: string]: number;
}

export const useNavIdx = () => {
  const [navIdx, setNavIdx] = useState(-1);
  const router = useRouter();

  useEffect(() => {
    let path: string = router.pathname.split("/")[1];
    const pathIdx: PathIdx = {
      [PageObj.Profile.toLowerCase()]: 0,
      [PageObj.Tech.toLowerCase()]: 1,
      [PageObj.Photo.toLowerCase()]: 2,
      [PageObj.Diet.toLowerCase()]: 3,
      [PageObj.Login.toLowerCase()]: 4,
    };
    let idx: number = -1;
    if (pathIdx.hasOwnProperty(path)) idx = pathIdx[path];
    if (idx !== navIdx) setNavIdx(idx);
  }, [router.pathname, navIdx]);

  return navIdx;
};
