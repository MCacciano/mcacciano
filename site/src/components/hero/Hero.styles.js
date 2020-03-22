import styled, { keyframes } from 'styled-components'
import { animated } from 'react-spring'

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

  .hero-oval {
    position: absolute;
    left: 0;
    /* clip-path: ellipse(); */
    width: 100%;
    z-index: -101;

    &#oval-1 {
      bottom: -45px;
      height: 100px;
      background: rgba(50, 130, 184, 0.3);
    }
    /* &#oval-1 {
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
    } */
  }

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
  justify-content: flex-start;
  align-items: center;
  width: 100%;

  @media screen and (max-width: 998px) {
    text-align: center;
    justify-content: center;
  }
`

export const HeroCopy = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 10px;
  margin-left: 200px;

  max-width: 600px;
  color: #f7f7f7;

  @media screen and (max-width: 998px) {
    margin: 0;
  }

  /* padding: 25px;
  line-height: 1;
  z-index: 1;
  margin: 0 auto; */
`

export const H1 = styled.h1`
  font-size: 4rem;
  font-family: 'Rubik', Arial, Helvetica, sans-serif;

  @media screen and (max-width: 998px) {
    margin: 0 auto;
  }

  @media screen and (max-width: 620px) {
    font-size: 3rem;
  }

  @media screen and (max-width: 460px) {
    font-size: 2.3rem;
  }
`
export const H2 = styled.h2`
  font-size: 2.5rem;
  font-family: 'Rubik', Arial, Helvetica, sans-serif;

  @media screen and (max-width: 998px) {
    margin: 0 auto;
  }

  @media screen and (max-width: 620px) {
    font-size: 2rem;
  }

  @media screen and (max-width: 460px) {
    padding-top: 5px;
    font-size: 1.65rem;
  }
`
export const H3 = styled.h3`
  font-size: 2rem;
  max-width: 100%;

  @media screen and (max-width: 998px) {
    margin: 0 auto;
  }

  @media screen and (max-width: 620px) {
    font-size: 1.5rem;
  }

  @media screen and (max-width: 460px) {
    padding-top: 10px;
    font-size: 1.3rem;
  }
`

export const SocialList = styled.ul``

export const SocialListItem = styled.li``

export const SocialListIcon = styled.i``

export const Span = styled.span`
  font-size: ${({ fontSize }) => `${fontSize}rem`};
  font-weight: ${({ fontWeight }) => `${fontWeight}`};
  letter-spacing: 1px;
  vertical-align: bottom;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    top: 60%;
    left: ${({ left }) => (left ? `${left}` : '0')};
    width: ${({ hWidth }) => (hWidth ? `${hWidth}%` : '0')};
    height: 30%;
    background: #3282b8;
    /* opacity: 0.3; */
    z-index: -1;
    max-width: 0;
    animation: ${growRight} ease-in 1s forwards;
  }
`

// export const HeroCopyWrapper = styled.div`
//   display: flex;
//   align-items: center;
//   background: #f7f7f7;

//   flex: 0 1 60%;
//   z-index: 1;

//   @media screen and (max-width: 900px) {
//     background: transparent;
//     flex: 1;
//   }

//   &:after {
//     content: '';
//     display: block;
//     width: 40%;
//     height: 100%;
//     position: absolute;
//     background: rgba(0, 0, 0, 0.3);
//     top: 0;
//     right: 0;

//     @media screen and (max-width: 900px) {
//       width: 100%;
//     }
//   }
// `

/**
 * @media screen and (max-width: 900px) {
    background: #f7f7f7;
    width: 100%;
    justify-content: center;
  }

  @media screen and (max-width: 630px) {
    flex-direction: column-reverse;
  }

  div {
    max-width: 656px;

    @media screen and (max-width: 1260px) {
      max-width: 432px;
    }
  }

  h1,
  h2,
  h3 {
    display: inline-block;
  }

  h1 {
    font-size: 4.3rem;
    font-weight: 900;
    font-family: 'Rubik', Arial, Helvetica, sans-serif;

    @media screen and (max-width: 1260px) {
      font-size: 2.8rem;
    }

    @media screen and (max-width: 481px) {
      font-size: 2.3rem;
    }

    @media screen and (max-width: 385px) {
      font-size: 2.1rem;
    }
    @media screen and (max-width: 360px) {
      font-size: 1.7rem;
    }
  }
  h2 {
    font-size: 3.5rem;
    font-weight: 400;
    padding-top: 0.2rem;
    font-family: 'Rubik', Arial, Helvetica, sans-serif;

    @media screen and (max-width: 1260px) {
      font-size: 2.22rem;
    }

    @media screen and (max-width: 481px) {
      font-size: 2.15rem;
    }

    @media screen and (max-width: 385px) {
      padding-top: 0.5rem;
      font-size: 1.4rem;
    }
  }
  h3 {
    font-size: 2.5rem;
    font-weight: 100;
    margin-top: 1.25rem;

    @media screen and (max-width: 1260px) {
      font-size: 1.75rem;
    }

    @media screen and (max-width: 481px) {
      font-size: 1.55rem;
    }

    @media screen and (max-width: 385px) {
      font-size: 1.25rem;
    }
  }
 */
// export const SocialList = styled.ul`
//   display: flex;
//   flex-flow: column nowrap;
//   justify-content: flex-start;
//   margin-right: 1rem;

//   @media screen and (max-width: 630px) {
//     flex-direction: row;
//   }
// `

// export const SocialListItem = styled(animated.li)`
//   margin-top: 0.9rem;

//   @media screen and (max-width: 630px) {
//     &:not(:first-child) {
//       margin-left: 1.25rem;
//     }
//   }
// `

// export const SocialListIcon = styled(animated.i)``
