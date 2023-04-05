import React from "react";
import styled from "styled-components";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import Comments from "../components/Comments";
import VideoCard from "../components/VideoCard";
const VideoPage = () => {
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
        <Title>The best video to watch this summer || 2023 enjoy!!</Title>
        <VideoDetails>
          <ChannelDetails>
            <Left>
              <Image src="https://media.istockphoto.com/id/873620504/photo/young-woman-in-heart-shape-cave-towards-the-idyllic-sunrise.jpg?s=612x612&w=0&k=20&c=3yi3-SKjlRLwWh3FZDUg9Zgpge5Fuh7fmKQTm9c36fo=" />
              <ChannelName>
                <ChannelTitle> Sandeep Bhattarai</ChannelTitle>
                <Sub>245.6k subscribers</Sub>
              </ChannelName>
            </Left>
            <Middle>
              <Button>Subscribe</Button>
            </Middle>
            <Right>
              <LikeDislike>
                <ThumbUpOutlinedIcon />
                like


              </LikeDislike>
              <LikeDislike>
              <ThumbDownAltOutlinedIcon />
              </LikeDislike>
              <Share></Share>
              <More></More>
            </Right>
          </ChannelDetails>
          <Description>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste
            cupiditate atque molestiae fuga, pariatur praesentium culpa magnam
            voluptatum tenetur ullam. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Iste cupiditate atque molestiae fuga, pariatur
            praesentium culpa magnam voluptatum tenetur ullam. Lorem ipsum
            dolor, sit amet consectetur adipisicing elit. Iste cupiditate atque
            molestiae fuga, pariatur praesentium culpa magnam voluptatum tenetur
            ullam.
          </Description>
        </VideoDetails>
        <Comments />
      </Content>

      <Recommendations>
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

      </Recommendations>
    </Container>
  );
};

export default VideoPage;

const Container = styled.div`
  display: flex;
  gap:20px;
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
  gap:10px;
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
