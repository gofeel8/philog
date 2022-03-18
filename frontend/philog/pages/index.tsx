import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import Seo from "../components/Seo";
import { tokenState } from "../states";
export default function Home() {
  const token = useRecoilValue(tokenState);
  useEffect(() => {
    console.log(token);
  });
  return (
    <div>
      <Seo title="Philog" />
      인트로
    </div>
  );
}
