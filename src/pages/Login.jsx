import { useRef } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { login } from "../lib/api/auth";

const Login = ({ setUser }) => {
  const idRef = useRef(null);
  const pwRef = useRef(null);
  const navigate = useNavigate();

  const LoginClick = async () => {
    const id = idRef.current.value;
    const pw = pwRef.current.value;
    const { userId, nickname, avatar } = await login({ id: id, password: pw });
    alert("로그인이 되었습니다.");
    setUser({ userId, nickname, avatar });
    navigate("/");
  };

  return (
    <StBackGroundDiv>
      <StLoginDiv>
        <StLoginTitle>Login..</StLoginTitle>
        <StInput
          type="text"
          name="ID"
          placeholder="ID를 입력해주세요"
          ref={idRef}
        />
        <StInput
          type="password"
          name="password"
          placeholder="PW를 입력해주세요"
          ref={pwRef}
        />
        <StBtn onClick={LoginClick}>로그인</StBtn>
        <StBtn onClick={() => navigate("/Signup")}>회원가입</StBtn>
      </StLoginDiv>
    </StBackGroundDiv>
  );
};

const StBackGroundDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90vh;
`;

const StLoginTitle = styled.h2`
  font-size: 30px;
  margin: 110px auto 25px auto;
`;

const StLoginDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  width: 50vh;
  height: 50vh;
  gap: 10px;
  border-radius: 40px;
`;

const StInput = styled.input`
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 10px;
  font-size: 14px;
  width: 300px;
  height: 30px;
`;

const StBtn = styled.button`
  padding: 12px;
  width: 320px;
  border-radius: 10px;
  font-size: 15px;
  border: none;
  color: white;
  background-color: #2ec4b6;
`;
export default Login;
