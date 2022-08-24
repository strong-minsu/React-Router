import React from "react";
import { useNavigate } from "react-router-dom";
import StyledButton from "../components/StyledButton";
export default function Login() {
  const [Email, setEmail] = React.useState("");
  const [Password, setPassword] = React.useState("");

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };

  let navigate = useNavigate();
  function signUp() {
    navigate("/");
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <form style={{ display: "flex", flexDirection: "column" }}>
        <label>Email</label>
        <input type="email" value={Email} onChange={onEmailHandler} />
        <label>Password</label>
        <input type="password" value={Password} onChange={onPasswordHandler} />

        <br />
        <StyledButton>Login</StyledButton>
        <br />
        <button onClick={signUp}>회원가입</button>
      </form>
    </div>
  );
}
