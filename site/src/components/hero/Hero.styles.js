import styled, { keyframes } from "styled-components"

const growRight = keyframes`
  from {
    max-width: 0;
  }

  to {
    max-width: 100%;
  }
`

export const HeroContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: 100%;
  height: 95vh;
  background: url(./hero-2.jpg);
  background-size: cover;
  background-position: top;
  z-index: 1;

  /* background: #f7f7f7; */

  &:after {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    background: rgba(0, 0, 0, 0.6);
    top: 0;
    left: 0;
    z-index: 1;
  }

  i {
    z-index: 2;
    border-radius: 50%;
    color: #f7f7f7;
    padding: 10px 12px;
    border: 1px solid #f7f7f7;

    &.github {
      background: rgba(26, 23, 23, 1);
    }

    &.twitter {
      background: rgba(29, 161, 242, 1);
    }

    &.linkedin {
      background: rgba(0, 115, 176, 1);
    }

    &.instagram {
      background: rgba(146, 63, 151, 1);
    }
  }
`

export const SocialList = styled.ul`
  display: flex;
  width: 100%;
  max-width: 300px;
  justify-content: space-between;
  margin: 40px 0;
  z-index: 2;
`

export const SocialListItem = styled.li``

export const SocialLink = styled.a``

export const HeroCopy = styled.p`
  font-size: 2.5rem;
  font-weight: 100;
  color: rgba(26, 23, 23, 1);
  background: #f7f7f7;
  text-align: left;
  z-index: 2;
  max-width: 660px;
  padding: 30px;
  margin-left: 50px;
  line-height: 1.1;
  border-radius: 5px;

  #hr {
    display: block;
    height: 2px;
    width: 80%;
    background: rgba(21, 122, 180, 0.8);
    margin: 1rem auto 0.5rem;
  }

  @media screen and (max-width: 760px) {
    margin: 0 25px;
    text-align: center;
    font-size: 2.25rem;
  }
`

export const Span = styled.span`
  font-size: ${({ fontSize }) => `${fontSize}rem`};
  letter-spacing: 1px;
  vertical-align: bottom;
  position: relative;
  font-weight: 300;

  @media screen and (max-width: 701px) {
    font-size: ${({ fontSize }) => `${fontSize - 0.5}rem`};
  }

  @media screen and (max-width: 701px) {
    font-size: ${({ fontSize }) => `${fontSize - 1}rem`};
  }

  &:after {
    content: "";
    position: absolute;
    top: 48%;
    left: 10%;
    width: 85%;
    height: 40%;
    background: rgba(21, 122, 180, 0.8);
    opacity: 0.7;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
    z-index: -1;
    max-width: 0;
    animation: ${growRight} ease-in 1s forwards;
  }
`
