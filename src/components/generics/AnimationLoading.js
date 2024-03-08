import React from "react";
import styled, { keyframes } from 'styled-components';

const bgColor = '#28272b';
const purple = '#6B46C1';
const gray = '#718096';

const spinAnimation = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const Container = styled.div`
  display: grid;
  place-content: center;
  height: 100vh;
  background-color: ${bgColor};
`

const SpinnerContainer = styled.div`
  display: inline-block;
  width: 120px;
  height: 120px;
  border: 4px solid ${purple};
  border-radius: 50%;
  border-top-color: ${gray};
  animation: ${spinAnimation} 0.8s linear infinite;
`;


const AnimationLoading = ({ size, color, themeColor }) => {
    return(
      <Container>
        <SpinnerContainer size={size} color={color} themeColor={themeColor} />
      </Container>
    );
}

export default AnimationLoading;