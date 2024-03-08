import React from 'react';
import styled from 'styled-components';
import video from '../../assets/animation.mp4'

const Animation = styled.video`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
`

const AnimationRolls = () => {
    return(
            <Animation autoPlay loop muted>
                <source src={video} type='video/mp4' />
            </Animation>
    );
}

export default AnimationRolls;