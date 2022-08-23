import { useNavigate } from "react-router-dom";
export default function Home() {
  let navigate = useNavigate();
  function handleClick() {
    navigate("/");
  }
  return (
    <>
      <div>Home 페이지 입니다.</div>
      <button onClick={handleClick}>go home</button>
    </>
  );
}
