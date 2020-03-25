import styled, { keyframes } from 'styled-components'
// import { animated } from 'react-spring'

import BackgroundImg from '../background-img/BackgroundImg'

const growRight = keyframes`
  from {
    max-width: 0;
  }

  to {
    max-width: 100%;
  }
`

export const HeroWrapper = styled(BackgroundImg)`
  display: flex;

  height: 80vh;
  width: 100vw;
  position: relative;
  background-position: bottom right;

  /* .hero-oval {
    position: absolute;
    left: 0;
    clip-path: ellipse();
    width: 100%;
    z-index: -101;

    &#oval-1 {
      bottom: -45px;
      height: 100px;
      background: rgba(50, 130, 184, 0.3);
    }
    &#oval-2 {
      bottom: -20px;
      height: 100px;
      background: rgba(50, 130, 184, 0.6);
      transform: rotate(2deg);
    }
    &#oval-3 {
      bottom: -20px;
      height: 100px;
      background: rgba(50, 130, 184, 0.6);
      transform: rotate(-2deg);
    }
  } */

  .overlay {
    display: block;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -99;

    &-black {
      background: rgba(0, 0, 0, 0.4);
    }

    &-blue {
      background: rgba(50, 130, 184, 0.5);

      /* background: linear-gradient(
        to bottom right,
        rgba(50, 130, 184, 0.7),
        rgba(50, 130, 184, 0.5),
        rgba(50, 130, 184, 0.4),
        rgba(50, 130, 184, 0.5),
        rgba(50, 130, 184, 0.7)
      ); */
    }
  }

  * {
    color: #f7f7f7;
  }
`

export const HeroCopyWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  @media screen and (min-width: 880px) {
    justify-content: flex-start;
  }
`

export const HeroCopy = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  align-content: center;
  justify-items: center;
  padding: 5px;

  text-align: center;
  max-width: 800px;

  @media screen and (min-width: 880px) {
    margin-left: 200px;
    text-align: left;
    justify-items: start;
  }
`

export const H1 = styled.h1`
  font-size: 3.75rem;
  font-family: 'Rubik', Arial, Helvetica, sans-serif;

  @media screen and (min-width: 768px) {
    font-size: 4.5rem;
  }
`
export const H2 = styled.h2`
  font-size: 2rem;
  font-family: 'Rubik', Arial, Helvetica, sans-serif;

  @media screen and (min-width: 768px) {
    font-size: 3.1rem;
  }
`
export const H3 = styled.h3`
  max-width: 600px;
  font-size: 1.65rem;

  @media screen and (min-width: 768px) {
    font-size: 2.2rem;
  }
`

export const SocialList = styled.ul``

export const SocialListItem = styled.li``

export const SocialListIcon = styled.i``

export const Span = styled.span`
  /* font-size: ${({ fontSize }) => `${fontSize}rem`}; */
  font-weight: ${({ fontWeight }) => `${fontWeight}`};
  letter-spacing: 1px;
  vertical-align: bottom;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    top: 60%;
    left: ${({ left }) => (left ? `${left}` : '0')};
    width: ${({ highlightWidth }) =>
      highlightWidth ? `${highlightWidth}%` : '0'};
    height: 30%;
    background: #3282b8;
    /* opacity: 0.3; */
    z-index: -1;
    max-width: 0;
    animation: ${growRight} ease-in 1s forwards;
  }
`
