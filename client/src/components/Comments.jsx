import React from "react";
import styled from "styled-components";
import SortIcon from "@mui/icons-material/Sort";
import Comment from "./Comment";

const Comments = () => {
  return (
    <Container>
      <Desc>
        <TotalComment>68 comments</TotalComment>
        <SortIcon />
      </Desc>

      <AddComments>
        <Image src="https://media.istockphoto.com/id/873620504/photo/young-woman-in-heart-shape-cave-towards-the-idyllic-sunrise.jpg?s=612x612&w=0&k=20&c=3yi3-SKjlRLwWh3FZDUg9Zgpge5Fuh7fmKQTm9c36fo=" />
        <Input type="text" placeholder="Add your Comments" />
      </AddComments>

      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </Container>
  );
};

export default Comments;

const Container = styled.div`
  margin-top: 20px;
`;
const TotalComment = styled.div`
  font-size: 24px;
  font-weight: 500;
`;
const Desc = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 50px;
  margin-bottom: 30px;
`;

const AddComments = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 30px;
`;
const Image = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
`;
const Input = styled.input`
  width: 80%;
  padding: 10px;
  font-size: 16px;
  outline: none;
  border-bottom: 1px solid grey;
  background-color: transparent;
  border-top-style: hidden;
  border-right-style: hidden;
  border-left-style: hidden;
  color: ${({ theme }) => theme.text};

  &:focus {
    border-color: white;
  }
`;
