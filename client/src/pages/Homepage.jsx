import React from "react";
import styled from "styled-components";
import VideoCard from "../components/VideoCard";

const Homepage = () => {
  return (
    <Container>
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />

    </Container>
  );
};

export default Homepage;

const Container = styled.div`
display:flex;
justify-content: space-between;
flex-wrap:wrap;
padding-top:10px`;
