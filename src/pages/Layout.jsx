import { useEffect } from "react";
import { Outlet, useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
import { getUserInfo } from "../lib/api/auth";

const Layout = ({ setUser, user }) => {
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (!user) {
  //     return;
  //   }
  //   getUserInfo().then((res) => {
  //     console.log(res);
  //     setUser({
  //       userId: res.id,
  //       nickname: res.nickname,
  //       avatar: res.avatar,
  //     }).catch(() => {
  //       navigate("/Login");
  //     });
  //   });

  //   console.log("user", user);
  // }, []);

  useEffect(() => {
    const dd = async () => {
      try {
        const response = await getUserInfo();
        return response;
      } catch (error) {
        console.error("Error updating selected month:", error);
        return null;
      }
    };
    dd().then((result) => {
      console.log(result);
    });
  }, []);

  const handleLogout = () => {
    setUser(null);
    navigate("/Login");
    localStorage.clear();
  };

  return (
    <>
      <StHeader>
        <StLinkGroup>
          <StLink to={"/"}>Home</StLink>
          <StLink to={"/profile"}>프로필</StLink>
        </StLinkGroup>
        <StUserProfile>
          {user && (
            <>
              <StUserImg src={user.avatar} alt="User Avatar" />
              <StUSerName>{user.nickname}</StUSerName>
              <StNavigateBtn onClick={handleLogout}>로그아웃</StNavigateBtn>
            </>
          )}
        </StUserProfile>
      </StHeader>
      <Outlet />
    </>
  );
};

const StHeader = styled.div`
  background-color: #636363;
  padding: 10px;
  width: 100%;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
`;

const StLinkGroup = styled.div`
  display: flex;
  align-items: center;
`;

const StNavigateBtn = styled.button`
  background-color: white;
  border: none;
  font-size: 14px;
  border-radius: 3px;
  width: 100px;
  height: 40px;
`;

const StLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin: 10px 0px 10px 10px;
`;

const StUserProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const StUserImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const StUSerName = styled.p`
  font-size: 20px;
  color: white;
`;

export default Layout;
