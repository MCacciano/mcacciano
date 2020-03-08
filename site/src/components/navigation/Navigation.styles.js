import { Link } from 'gatsby'

import styled from 'styled-components'
import { animated } from 'react-spring'

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

  @media screen and (max-width: 812px) and (orientation: landscape) {
    height: 55px;
    line-height: 55px;
  }

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
  display: flex;
  align-items: center;
  color: #f7f7f7;
  height: 100%;
  padding: 0 1.25rem;
  font-family: 'Rubik', Arial, Helvetica, sans-serif;

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
  padding: 0 1.25rem;
  height: 100%;
  color: #f7f7f7;

  display: none;

  @media screen and (max-width: 660px) {
    display: flex;
    align-items: center;
  }
`
export const MobileNav = styled(animated.ul)`
  display: flex;
  flex-direction: column;
  justify-content: center;

  position: absolute;
  top: 8vh;
  right: 0;
  /* width: 0; */
  height: 92vh;
  z-index: 9001;

  background: #0f4c75;
`
export const MobileNavItem = styled(animated.li)`
  a {
    display: block;
    width: 100%;
    text-align: center;
    font-size: 3rem;
    font-family: 'Rubik', Arial, Helvetica, sans-serif;
    padding: 2rem 1rem;
  }
`
