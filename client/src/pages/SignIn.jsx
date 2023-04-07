import React, { useState } from "react";
import styled from "styled-components";
import axios from 'axios';
import { useDispatch } from "react-redux";
import { loginFailure, loginStart, loginSuccess } from "../redux/userSlice";

const SignIn = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();


  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    try {
      const res = await axios.post('http://localhost:8080/api/auth/login', {email, password});
      dispatch(loginSuccess(res.data));

    } catch (err) {
      console.log(err.message);
      dispatch(loginFailure());

    }
  };

  return (
    <Container>
      <Wrapper>
        <Title>Sign in</Title>

        <Input
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="password"

          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={handleSubmit}>Sign in</Button>
        <Title>or</Title>
        <Input placeholder="username" />
        <Input placeholder="email" />
        <Input type="password" placeholder="password" />
        <Button>Sign up</Button>
      </Wrapper>
    </Container>
  );
};

export default SignIn;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 56px);
  color: ${({ theme }) => theme.text};
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.bgLighter};
  border: 1px solid ${({ theme }) => theme.soft};
  padding: 20px 50px;
  gap: 10px;
`;

const Title = styled.h1`
  font-size: 24px;
`;

const SubTitle = styled.h2`
  font-size: 20px;
  font-weight: 300;
`;

const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.soft};
  border-radius: 3px;
  padding: 10px;
  background-color: transparent;
  width: 100%;
  color: ${({ theme }) => theme.text};
`;

const Button = styled.button`
  border-radius: 3px;
  border: none;
  padding: 10px 20px;
  font-weight: 500;
  cursor: pointer;
  background-color: ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.textSoft};
`;
