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

  background: #0f4c75;

  &:after {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
  }

  div {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    max-width: 1200px;

    @media screen and (max-width: 660px) {
      padding: 20px;
    }
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
`

export const Ul = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  height: 100%;
`

export const Li = styled.li`
  text-transform: uppercase;
  letter-spacing: 1px;
  height: 100%;

  @media screen and (max-width: 660px) {
    &:not(:last-child) {
      display: none;
    }
  }
`

export const BurgerMenu = styled.i`
  color: rgba(26, 23, 23, 1);
  cursor: pointer;
  padding: 5px;
  padding-right: 20px;

  display: none;

  @media screen and (max-width: 660px) {
    display: inline-block;
    color: #f7f7f7;
  }
`
