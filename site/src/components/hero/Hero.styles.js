import styled, { keyframes } from 'styled-components'

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

  height: 92vh;
  width: 100vw;

  background-position: bottom right;

  * {
    color: #1b262c;
  }
`

export const HeroCopyWrapper = styled.div`
  display: flex;
  align-items: center;
  background: #f7f7f7;

  flex: 0 1 60%;

  @media screen and (max-width: 900px) {
    background: transparent;
    flex: 1;
  }

  &:after {
    content: '';
    display: block;
    width: 40%;
    height: 100%;
    position: absolute;
    background: rgba(0, 0, 0, 0.3);
    top: 0;
    right: 0;

    @media screen and (max-width: 900px) {
      width: 100%;
    }
  }
`

export const HeroCopy = styled.div`
  display: flex;

  color: #1b262c;
  padding: 25px;
  line-height: 1;
  z-index: 1;
  margin: 0 auto;

  @media screen and (max-width: 900px) {
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
      font-size: 2.6rem;
    }

    /* older phone smaller screen */
    @media screen and (max-width: 385px) {
      font-size: 2.2rem;
    }
    @media screen and (max-width: 360px) {
      font-size: 2rem;
    }
    /* --------------------------- */
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

    /* older phone smaller screen */
    @media screen and (max-width: 385px) {
      font-size: 1.9rem;
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

    /* older phone smaller screen */
    @media screen and (max-width: 385px) {
      font-size: 1.25rem;
    }
  }
`

export const SocialList = styled.ul`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  margin-right: 1rem;

  @media screen and (max-width: 630px) {
    flex-direction: row;
  }
`

export const SocialListItem = styled.li`
  margin-top: 0.9rem;

  @media screen and (max-width: 630px) {
    &:not(:first-child) {
      margin-left: 1.25rem;
    }
  }
`

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
    opacity: 0.3;
    z-index: -1;
    max-width: 0;
    animation: ${growRight} ease-in 1s forwards;
  }
`
