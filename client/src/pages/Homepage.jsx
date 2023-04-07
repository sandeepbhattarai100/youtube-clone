import React, { useState, useEffect } from "react";
import styled from "styled-components";
import VideoCard from "../components/VideoCard";
import axios from "axios";

const Homepage = ({type}) => {
  const [video, setVideo] = useState([]);

  useEffect(() => {
    const fetchVideo = async () => {
      const res = await axios.get(`http://localhost:8080/api/video/${type}`);
      setVideo(res.data);

    };
    fetchVideo();
  }, [type]);

  return (
    <Container>
      {video.map((video) => (
        <VideoCard key={video._id} video={video} />
      ))}
    </Container>
  );
};

export default Homepage;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-top: 10px;
`;
