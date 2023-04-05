import React from "react";
import styled from "styled-components";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

const NavBar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <input type="text" name="" id="" placeholder="Search" />
          <SearchOutlinedIcon />
        </Left>
        <Right>
          <VideoCallOutlinedIcon />
          <NotificationsOutlinedIcon />
          <AccountCircleOutlinedIcon />
        </Right>
      </Wrapper>
    </Container>
  );
};

export default NavBar;

const Container = styled.div`
  height: 80px;
  z-index: 999;
  position: sticky;
  top: 0;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  padding-top: 20px;
  background-color: ${({ theme }) => theme.bg};
  color:${({theme})=>theme.text};
`;

const Wrapper = styled.div`
  display: flex;
  height: 70%;

  justify-content: space-around;
  align-items: center;
`;

const Left = styled.div`
  height: 80%;
  width: 400px;
  border: 2px solid ${({ theme }) => theme.text};
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  .MuiSvgIcon-root {
    color: ${({ theme }) => theme.text};
  }

  input {
    height: 100%;
    width: 90%;
    outline: none;
    border: none;
    background: transparent;
    padding-left: 5px;
    font-size: large;
    color: ${({ theme }) => theme.text};
  }
`;

const Right = styled.div`
  display: flex;
  gap: 30px;

  .MuiSvgIcon-root {
    font-size: 35px;
    color: ${({ theme }) => theme.text};
  }
`;
