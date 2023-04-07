import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";

const VideoCard = ({ type, video }) => {
  const [channel, setChannel] = useState({});

  useEffect(() => {
    const fetchChannel = async () => {
      const res = await axios.get(`http://localhost:8080/api/user/${video.userId}`);
      setChannel(res.data);
    };
    fetchChannel();
  }, [video.userId]);


  return (
    <Link to={`/video/${video._id}`} style={{ textDecoration: "none" }}>
      <Container type={type}>
        <Image type={type} src={video.imageUrl} />
        <Details>
          <ChannelImage src={channel.img} />

          <Information>
            <Title type={type}>{video.title}</Title>
            <ChannelName type={type}>{channel.name}</ChannelName>
            <Texts type={type}>{video.views} views • 1 day ago</Texts>
          </Information>
        </Details>
      </Container>
    </Link>
  );
};

export default VideoCard;

const Container = styled.div`
  width: 360px;
  margin-bottom: ${(props) => (props.type === "sm" ? "10px" : "45px")};
  cursor: pointer;
  border-radius: 10px;
  overflow: hidden;
  display: ${(props) => props.type === "sm" && "flex"};
  gap: ${(props) => props.type === "sm" && "10px"};
`;

const ChannelImage = styled.img`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  overflow: hidden;
`;

const Image = styled.img`
  height: ${(props) => (props.type === "sm" ? "100px" : "202px")};
  width: ${(props) => (props.type === "sm" ? "40%" : "100%")};
  object-fit: cover;
`;

const Details = styled.div`
  display: flex;
  margin-top: 16px;
  gap: 10px;
`;

const Information = styled.div``;

const Title = styled.div`
  font-size: ${(props) => (props.type === "sm" ? "15px" : "20px")};
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.div`
  color: ${({ theme }) => theme.subtext};
  font-size: ${(props) => (props.type === "sm" ? "8px" : "16px")};
  font-weight: 500;
`;

const Texts = styled.div`
  color: ${({ theme }) => theme.subtext};
  font-weight: ${(props) => (props.type === "sm" ? "100" : "500")};
  font-size: ${(props) => (props.type === "sm" ? "8px" : "14px")};
`;
