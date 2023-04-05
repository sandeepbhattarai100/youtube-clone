import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const VideoCard = ({ type }) => {
  return (
    <Link to="/video/test" style={{ textDecoration: "none" }}>
      <Container type={type}>
        <Image
          type={type}
          src="https://media.istockphoto.com/id/901169654/photo/lens-image-dslr-manhattan-downtown-city-new-york-hand.jpg?s=612x612&w=0&k=20&c=H2JN9owyOSsGp_SPbwKJKk5iiGg7_g6VzVNxKeRlWNw="
        />
        <Details>
          <ChannelImage src="https://images.unsplash.com/file-1661973760703-91f50df21c28image?dpr=2&auto=format&fit=crop&w=416&q=60" />

          <Information>
            <Title type={type}>Happening in 2023</Title>
            <ChannelName type={type}>Freecodecamp.org</ChannelName>
            <Texts type={type}>660,908 views • 1 day ago</Texts>
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
