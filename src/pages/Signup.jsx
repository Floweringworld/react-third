import styled from "styled-components";
import { register } from "../lib/api/auth";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const idRef = useRef(null);
  const pwRef = useRef(null);
  const nameRef = useRef(null);
  const navigate = useNavigate();

  const handleRegister = async () => {
    const Id = idRef.current.value;
    const Pw = pwRef.current.value;
    const Name = nameRef.current.value;

    if (Name.length < 1 || Name.length > 10) {
      alert("닉네임은 1글자에서 10글자 이내로만 가능합니다.");
      return;
    }
    if (Id.length < 4 || Id.length > 10) {
      alert("아이디는 4글자에서 10글자 이내로만 가능합니다.");
      return;
    }
    if (Pw.length < 4 || Pw.length > 15) {
      alert("비밀번호는 4글자에서 15글자 이내로만 가능합니다.");
      return;
    }

    const response = await register({
      id: Id,
      password: Pw,
      name: Name,
    });

    if (response) {
      confirm("회원가입이 완료되었습니다.");
      navigate("/Login");
    }
  };

  return (
    <StBackGroundDiv>
      <StLoginDiv>
        <StLoginTitle>SignUp..</StLoginTitle>
        <StInput type="text" ref={nameRef} placeholder="Name" />
        <StInput type="text" ref={idRef} placeholder="ID " />
        <StInput type="password" ref={pwRef} placeholder="Password" />
        <StBtn onClick={handleRegister}>회원가입</StBtn>
        <StBtn onClick={() => navigate("/Login")}>나가기</StBtn>
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
  margin: 70px auto 25px auto;
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
export default Signup;
