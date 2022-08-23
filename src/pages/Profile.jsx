import { useParams } from "react-router-dom";

export default function Profile() {
  let params = useParams();
  console.log(params.id);
  return <div>Profile 페이지 입니다.</div>;
}
