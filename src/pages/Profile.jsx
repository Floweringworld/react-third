import styled from "styled-components";

const Profile = () => {
  return (
    <StBackGroundDiv>
      <StLoginDiv>
        <StLoginTitle>Profile 수정 </StLoginTitle>
        <StInput />
        <StInput />
        <StBtn>프로필 수정</StBtn>
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
