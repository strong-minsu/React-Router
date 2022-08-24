import { Link, useNavigate } from "react-router-dom";
import { Calendar } from "antd";

export default function Home() {
  let navigate = useNavigate();
  function handleClick() {
    navigate("/");
  }

  return (
    <>
      <div>Home 페이지 입니다.</div>
      <button onClick={handleClick}>go home</button>
      <br></br>
      {/* 링크.. */}
      <Link to="/About">about</Link>
      <Calendar />
    </>
  );
}
