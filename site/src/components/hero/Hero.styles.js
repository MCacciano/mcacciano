import styled, { keyframes } from 'styled-components'
// import { animated } from 'react-spring'

import BackgroundImage from 'gatsby-background-image'

export const HeroSection = styled(BackgroundImage)`
  width: 100%;
  height: 92vh;
  line-height: 1.2;
  color: #eeeeee;

  @media screen and (min-width: 475px) {
    height: 60vh;
  }
  @media screen and (min-width: 900px) {
    height: 85vh;
    /* clip-path: polygon(0 0, 0 90%, 100% 100%, 100% 0); */
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
    background: rgba(48, 56, 65, 0.7);
    /* background: linear-gradient(
      to bottom right,
      rgba(27, 38, 44, 0.9),
      rgba(255, 163, 114, 0.1),
      rgba(27, 38, 44, 0.6),
      rgba(255, 163, 114, 0.1),
      rgba(27, 38, 44, 0.9)
    ); */
  }

  .hero-copy-wrapper {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
    text-align: left;

    @media screen and (max-width: 840px) {
      justify-content: center;
      text-align: center;
    }

    .hero-copy {
      display: flex;
      flex-direction: column;
      width: 100%;
      max-width: 660px;
      padding: 0 10px;
      margin-left: 10vw;

      @media screen and (max-width: 840px) {
        margin-left: 0;
      }

      h1 {
        font-size: 2.7rem;
        font-weight: 700;
        font-family: 'Rubik', Arial, Helvetica, sans-serif;

        /* older small screens */
        @media screen and (min-width: 1px) and (max-width: 396px) {
          font-size: 2.3rem;
        }

        @media screen and (min-width: 600px) {
          font-size: 3.9rem;
        }

        @media screen and (min-width: 1000px) {
          font-size: 4.5rem;
        }
      }
      h2 {
        font-size: 2.1rem;
        font-weight: 500;
        font-family: 'Rubik', Arial, Helvetica, sans-serif;

        /* older small screens */
        @media screen and (min-width: 1px) and (max-width: 375px) {
          font-size: 1.9rem;
        }

        @media screen and (min-width: 600px) {
          font-size: 3rem;
        }

        @media screen and (min-width: 1000px) {
          font-size: 3.5rem;
        }
      }
      h3 {
        font-size: 1.8rem;
        font-weight: 100;

        .em {
          font-weight: 500;
          position: relative;

          &:after {
            content: '';
            position: absolute;
            width: 97%;
            max-width: 0%;
            height: 1px;
            left: 2px;
            bottom: 5px;
            background: #be3144;
            animation: growRight 750ms ease-in-out 500ms forwards;
            z-index: -1;

            @keyframes growRight {
              0% {
                max-width: 0%;
              }

              100% {
                max-width: 100%;
              }
            }
          }
        }

        /* older small screens */
        @media screen and (min-width: 1px) and (max-width: 375px) {
          font-size: 1.6rem;
        }

        @media screen and (min-width: 600px) {
          font-size: 2.1rem;
        }

        @media screen and (min-width: 1000px) {
          font-size: 2.5rem;
        }
      }

      .ctas {
        display: flex;
        justify-content: flex-start;
        margin-top: 20px;
        font-size: 1.5rem;
        font-family: 'Rubik', Arial, Helvetica, sans-serif;
        font-weight: 100;

        @media screen and (max-width: 840px) {
          justify-content: center;
        }

        .cta {
          border: thin solid #be3144;
          border-radius: 5px;
          padding: 10px 20px;
          color: #eeeeee;

          &:not(:first-child) {
            margin-left: 15px;
          }

          &:hover {
            background: #be3144;
          }
        }
      }
    }
  }
`
