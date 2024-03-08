import React from "react";
import { useAuth0 } from '@auth0/auth0-react';
import styled from 'styled-components';
import theme from "../../theme";

const Button = styled.a`
  position: relative;
  display: inline-block;
  padding: 15px 25px;
  background-color: ${theme.colors.yellow};
  text-transform: uppercase;
  color: ${theme.colors.brown};
  font-family: "Nunito Sans", sans-serif;
  font-weight: 900;
  letter-spacing: .3em;
  transition: all .15s linear 0s;
  box-shadow: -6px 6px 0 ${theme.colors.brown};
  cursor: pointer;
  
  &:hover {
    top: 3px;
    left: -3px;
    box-shadow: -3px 3px 0 ${theme.colors.brown};
    
    &::after {
      top: 1px;
      left: -2px;
      width: ${theme.angles.angleO};
      height: ${theme.angles.angleO};
    }
    
    &::before {
      bottom: -2px;
      right: 1px;
      width: ${theme.angles.angleO};
      height: ${theme.angles.angleO};
    }
  }
  
  &::after,
  &::before {
    transition: all .15s linear 0s;
    content: '';
    position: absolute;
    background-color: ${theme.colors.brown};
    transform: rotate(45deg);
    z-index: -1;
  }
  
  &::after {
    top: 2px;
    left: -4px;
    width: ${theme.angles.angle};
    height: ${theme.angles.angle};
  }
  
  &::before {
    bottom: -4px;
    right: 2px;
    width: ${theme.angles.angle};
    height: ${theme.angles.angle};
  }
  
  &:active {
    top: 6px;
    left: -6px;
    box-shadow: none;
    
    &::before {
      bottom: 1px;
      right: 1px;
    }
    
    &::after {
      top: 1px;
      left: 1px;
    }
  }
`;

const LogoutButton = () => {
    
    const { logout } = useAuth0();
    
    return <Button onClick={() => logout({ returnTo: 'https://sercroft.github.io/ToDo-react'})}>Logout!</Button>
}

export default LogoutButton;