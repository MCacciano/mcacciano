import styled, { keyframes } from "styled-components"

const growRight = keyframes`
  from {
    max-width: 0;
  }

  to {
    max-width: 100%;
  }
`

export const HeroWrapper = styled.div`
  display: flex;

  height: 92vh;

  * {
    color: #0f4c75;
    color: #1b262c;
  }
`

export const HeroCopyWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  background: url(./hero-2.jpg);
  background-size: cover;
  background-position: left;

  @media screen and (max-width: 1080px) {
    background-position: bottom;
  }

  @media screen and (max-width: 880px) {
    background: url(./mobile-hero-2.jpg);
    background-size: cover;
    background-position: right;
  }

  &:after {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    background: rgba(0, 0, 0, 0.6);
    top: 0;
    left: 0;
  }
`

export const HeroCopy = styled.div`
  display: grid;
  grid-template-columns: 10% 90%;
  align-content: center;

  line-height: 1.1;
  padding: 1rem;
  height: 100%;
  background: #f7f7f7;
  z-index: 1;
  white-space: nowrap;

  @media screen and (max-width: 990px) {
    grid-template-columns: 1fr;
  }

  @media screen and (max-width: 880px) {
    height: auto;
    width: 100%;
  }

  @media screen and (max-width: 812px) and (orientation: landscape) {
    width: 100vw;
  }

  h1 {
    font-size: 4.5rem;
    font-weight: 900;
    font-family: "Rubik";

    @media screen and (max-width: 1140px) {
      font-size: 3.75rem;
    }

    @media screen and (max-width: 640px) {
      white-space: normal;
      word-break: break-word;
    }

    @media screen and (max-width: 550px) {
      font-size: 3.25rem;
    }
  }

  h2 {
    font-size: 4rem;
    font-weight: 400;
    font-family: "Rubik";

    @media screen and (max-width: 1140px) {
      font-size: 2.25rem;
    }

    @media screen and (max-width: 550px) {
      font-size: 2rem;
    }
  }

  h3 {
    font-size: 2.5rem;
    font-weight: 100;
    margin-top: 1rem;

    max-width: 620px;
    white-space: normal;
    word-break: break-word;

    @media screen and (max-width: 1140px) {
      font-size: 1.75rem;
      max-width: 565px;
    }

    @media screen and (max-width: 550px) {
      font-size: 1.5rem;
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 1rem 0;

    @media screen and (max-width: 990px) {
      flex-direction: row;
      grid-row: 2;
    }

    li {
      a {
        display: block;
        height: 100%;
        padding: 1rem;
      }
    }
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem;
  }
`

export const Span = styled.span`
  font-size: ${({ fontSize }) => `${fontSize}rem`};
  font-weight: ${({ fontWeight }) => `${fontWeight}`};
  letter-spacing: 1px;
  vertical-align: bottom;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    top: 60%;
    left: ${({ left }) => (left ? `${left}` : "0")};
    width: ${({ hWidth }) => (hWidth ? `${hWidth}%` : "0")};
    height: 30%;
    background: #3282b8;
    opacity: 0.7;
    z-index: -1;
    max-width: 0;
    animation: ${growRight} ease-in 1s forwards;
  }
`
