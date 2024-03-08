import React from "react";
import styled from 'styled-components';
import LoginButton from "./generics/LoginButton";
import AnimationRolls from "./generics/AnimationRolls";
import { useAuth0 } from '@auth0/auth0-react';
import AnimationLoading from "./generics/AnimationLoading";
import Home from "./Home";

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
`

const Login = () => {
  
  const { isAuthenticated, isLoading } = useAuth0()

  if(isLoading){
    return <AnimationLoading />
  }

  return isAuthenticated 
  ? 
      <Home /> 
  : 
    <Container>
        <AnimationRolls />
        <LoginButton />
    </Container>
}

export default Login;