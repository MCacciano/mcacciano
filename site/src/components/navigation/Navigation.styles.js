import { Link } from "gatsby"

import styled from "styled-components"
import { animated } from "react-spring"

export const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 2;
  height: 8vh;
  line-height: 8vh;

  @media screen and (max-width: 812px) and (orientation: landscape) {
    height: 55px;
    line-height: 55px;
  }

  background: #1b262c;
  background: #0f4c75;

  div {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    max-width: 1200px;
  }

  .active {
    background: rgba(0, 0, 0, 0.3) !important;
  }
`

export const GLink = styled(animated(Link))`
  display: block;
  color: #f7f7f7;
  height: 100%;
  padding: 0 1.25rem;
  font-family: "Rubik", Arial, Helvetica, sans-serif;

  &:hover {
    background: rgba(0, 0, 0, 0.3);
  }

  &:active {
    color: #f7f7f7;
  }

  &:visited {
    color: #f7f7f7;
  }
`

export const Logo = styled.h1`
  font-size: 1.5rem;
  letter-spacing: 1px;
  font-weight: 700;

  @media screen and (max-width: 336px) {
    display: none;
  }
`

export const Ul = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  height: 100%;

  @media screen and (max-width: 336px) {
    width: 100%;
    justify-content: flex-end;
  }
`

export const Li = styled.li`
  text-transform: uppercase;
  letter-spacing: 1px;
  height: 100%;

  @media screen and (max-width: 660px) {
    &:last-child {
      margin-right: 25px;
    }

    &:not(:last-child) {
      display: none;
    }
  }
`

export const BurgerMenu = styled.i`
  color: rgba(26, 23, 23, 1);
  cursor: pointer;
  line-height: 1.6;

  display: none;

  @media screen and (max-width: 660px) {
    display: inline-block;
    color: #f7f7f7;
  }
`
