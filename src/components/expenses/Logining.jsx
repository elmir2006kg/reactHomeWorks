import React, { useState } from "react";
import styled from "styled-components";

const Logining = ({ bool, setbool }) => {
  const [login, Setlogin] = useState("");
  const [password, setPassword] = useState("");

  if (login == "Elmir" && password == 2212) {
    setbool(!bool);
  }

  return (
    <LoginStyled>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          width: "400px",
          height: "300px",
          backgroundColor: "#c7bdbdbc",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div>
          <label htmlFor="login" style={{ marginRight: "27px" }}>
            Login:
          </label>
          <input
            id="login"
            type="text"
            value={login}
            onChange={(e) => Setlogin(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="pass">Password :</label>

          <input
            type="password"
            id="pass"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
    </LoginStyled>
  );
};

export default Logining;

const LoginStyled = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;
