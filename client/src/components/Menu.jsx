import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import HouseIcon from "@mui/icons-material/House";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import LocalFireDepartmentOutlinedIcon from "@mui/icons-material/LocalFireDepartmentOutlined";
import HeadphonesOutlinedIcon from "@mui/icons-material/HeadphonesOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import SmartDisplayOutlinedIcon from "@mui/icons-material/SmartDisplayOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import FeedbackOutlinedIcon from "@mui/icons-material/FeedbackOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { color } from "@mui/system";
const Menu = ({ darkMode, setDarkMode }) => {
  return (
    <Container>
      <Wrapper>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Logo>
            <img
              src="https://www.svgrepo.com/download/13671/youtube.svg"
              alt="image"
            />
            Youtube
          </Logo>
        </Link>
        <Items>
          <HouseIcon />
          Home
        </Items>
        <hr />
        <Items>
          <VideoLibraryOutlinedIcon />
          Library
        </Items>
        <Items>
          <HistoryOutlinedIcon />
          History
        </Items>
        <Items>
          <SmartDisplayOutlinedIcon />
          your videos
        </Items>
        <Items>
          <ThumbUpOutlinedIcon />
          Liked videos
        </Items>
        <hr style={{ height: "1px", color: "grey" }} />

        <Items>
          <LocalFireDepartmentOutlinedIcon />
          Trending
        </Items>

        <hr />
        <Items>
          <SettingsOutlinedIcon />
          setting
        </Items>
        <Items>
          <HistoryOutlinedIcon />
          report history
        </Items>
        <Items>
          <HelpOutlineOutlinedIcon />
          help
        </Items>
        <Items>
          <FeedbackOutlinedIcon />
          send feedback
        </Items>
        <Items onClick={() => setDarkMode(!darkMode)}>
          <LightModeOutlinedIcon />
          Light
        </Items>
        <hr />
        <Link to="/signin" style={{textDecoration:"none" ,color:"inherit"}}>
          {" "}
          <Login>
            sign in to like and subscribe
            <Button>
              <AccountCircleOutlinedIcon />
              Sign In
            </Button>
          </Login>
        </Link>
      </Wrapper>
    </Container>
  );
};

export default Menu;

const Container = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
  font-weight: 600;
  position: sticky;
  top: 0;
  height: 100vh;
`;

const Wrapper = styled.div`
  padding: 10px 15px;
`;
const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  padding-bottom: 30px;
  font-size: large;
  cursor: pointer;

  img {
    height: 30px;
  }
`;

const Items = styled.div`
  display: flex;
  gap: 20px;
  padding-bottom: 10px;
  cursor: pointer;

  :hover {
    background-color: ${({ theme }) => theme.hover};
    border-radius: 5px;
  }
`;

const Login = styled.div``;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
  padding: 5px;
  border-radius: 2px;
  height: 20px;
  width: 70%;
  color: blue;
  border: 1px solid blue;
  cursor: pointer;
`;
