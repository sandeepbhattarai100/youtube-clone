import React,{useEffect, useState} from "react";
import styled from "styled-components";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import Comments from "../components/Comments";
import VideoCard from "../components/VideoCard";
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import { useLocation } from "react-router-dom";
import axios from 'axios';
import { fetchSuccess } from "../redux/videoSlice";
import { useDispatch,useSelector } from 'react-redux';

const VideoPage = () => {
  const { user } = useSelector(state => state.user);
  const { video } = useSelector(state => state.video);
  const path = useLocation().pathname.split("/")[2];//yesma video id cha console and check

  const [channel, setChannel] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {

      try {
        const videoRes = await axios.get(`http://localhost:8080/api/video/find/${path}`);
        const channelRes = await axios.get(`http://localhost:8080/api/user/${videoRes.data.userId}`);
        setChannel(channelRes.data);
        dispatch(fetchSuccess(videoRes.data));


      } catch (error) {

      }

    }
    fetchData();
  }, [path]);


  return (
    <Container>
      <Content>
        <VideoWrapper>
          <iframe
            width="100%"
            height="450"
            src="https://www.youtube.com/embed/NhxVR2Szu3k"
            title="best video"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </VideoWrapper>
        <Title>{video.title}</Title>
        <VideoDetails>
          <ChannelDetails>
            <Left>
              <Image src={channel.imgUrl} />
              <ChannelName>
                <ChannelTitle>{channel.name} </ChannelTitle>
                <Sub>{video.views} views</Sub>
              </ChannelName>
            </Left>
            <Middle>
              <Button>Subscribe</Button>
            </Middle>
            <Right>

              <LikeDislike>
{video.likes?.includes(user._id ) ?<ThumbUpAltIcon/>:    <ThumbUpOutlinedIcon />}

                like {video.likes?.length}
              </LikeDislike>
              <LikeDislike>
{video.dislikes.includes(user._id)? <ThumbDownIcon/>: <ThumbDownAltOutlinedIcon />}

              </LikeDislike>
              <Share></Share>
              <More></More>
            </Right>
          </ChannelDetails>
          <Description>
         {video.desc}
          </Description>
        </VideoDetails>
        <Comments />
      </Content>

      {/* <Recommendations>
        <VideoCard type="sm" />
        <VideoCard type="sm" />
        <VideoCard type="sm" />
        <VideoCard type="sm" />
        <VideoCard type="sm" />
        <VideoCard type="sm" />
        <VideoCard type="sm" />
        <VideoCard type="sm" />
        <VideoCard type="sm" />
        <VideoCard type="sm" />
        <VideoCard type="sm" />
        <VideoCard type="sm" />
        <VideoCard type="sm" />
        <VideoCard type="sm" />

      </Recommendations> */}
    </Container>
  );
};

export default VideoPage;

const Container = styled.div`
  display: flex;
  gap: 20px;
`;
const Content = styled.div`
  flex: 5;
  color: ${({ theme }) => theme.text};
`;
const VideoWrapper = styled.div`
  padding-bottom: 15px;
`;

const VideoDetails = styled.div``;
const Title = styled.div`
  font-size: 24px;
  font-weight: 600;
  margin-left: 50px;
`;

const ChannelDetails = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Left = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: start;
`;
const Image = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  object-fit: cover;
`;

const ChannelName = styled.div``;
const ChannelTitle = styled.h2`
  padding-bottom: -15px;
`;
const Sub = styled.div`
  color: ${({ theme }) => theme.subtext};
`;

const Middle = styled.div`
  background-color: ${({ theme }) => theme.buttoncolor};
  padding: 10px;
  border-radius: 5px;
  color: ${({ theme }) => theme.buttontext};
  cursor: pointer;
  user-select: none;
  &:hover {
    background-color: #ede7e7;
  }
`;
const Button = styled.div`
  font-weight: 500;
`;
const Right = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

const H = styled.span`
  height: 100%;
  width: 1px;
  background-color: white;
  color: white;
  font-size: 1px;
`;

const LikeDislike = styled.span`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 5px;
  background-color: ${({ theme }) => theme.desccolor};
  padding: 10px;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background-color: #444242;
  }
`;
const Share = styled.span``;
const More = styled.span``;
const Description = styled.div`
  color: ${({ theme }) => theme.text};
  margin-top: 15px;
  background-color: ${({ theme }) => theme.desccolor};
  padding: 15px;
  border-radius: 20px;
  &:hover {
    background-color: #444242;
  }
`;

const Recommendations = styled.div`
  flex: 2;
`;
