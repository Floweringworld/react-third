import { useRef, useState } from "react";
import styled from "styled-components";
import { updateProfile } from "../lib/api/auth";
import { useNavigate } from "react-router-dom";

const Profile = ({ setUser, user }) => {
  const nicknameRef = useRef(null);
  const [avatar, setAvatar] = useState(null);
  const navigate = useNavigate();

  const handleUpdate = async () => {
    const nickname = nicknameRef.current.value;
    const formData = new FormData();
    formData.append("nickname", nickname);
    formData.append("avatar", avatar);
    const response = await updateProfile(formData);

    if (response.success) {
      setUser({
        ...user,
        nickname: response.nickname,
        avatar: response.avatar,
      });
      navigate("/");
    }
  };

  return (
    <StBackGroundDiv>
      <StLoginDiv>
        <StLoginTitle>Profile 수정 </StLoginTitle>
        <StInput
          type="text"
          placeholder="NickName"
          minLength="1"
          maxLength="10"
          ref={nicknameRef}
        />
        <StInput
          type="file"
          accept="image/*"
          onChange={(e) => {
            setAvatar(e.target.files[0]);
          }}
        />
        <StBtn onClick={handleUpdate}>프로필 수정</StBtn>
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

export default Profile;
