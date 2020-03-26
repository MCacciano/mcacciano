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

  background: #303841;
  div {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    max-width: 1200px;
  }

  .active {
    border-bottom: 5px solid #be3144;
    padding-top: 5px;

    @media screen and (max-width: 660px) {
      background: none;
    }
  }
`

export const GLink = styled(animated(Link))`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 1.25rem;
  font-family: 'Rubik', Arial, Helvetica, sans-serif;
  color: #eeeeee;
  text-decoration: none;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    display: block;
    height: 2px;
    width: 100%;
    max-width: 0;
    left: 0;
    bottom: 0;
    background: #be3144;
    transition: all 250ms ease-in-out;
  }

  &:hover {
    &:after {
      max-width: 100%;
    }
  }
`

export const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  font-family: 'Rubik', Arial, Helvetica, sans-serif;
`

export const Ul = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  height: 100%;
  font-weight: 300;
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
  width: 0;
  height: 92vh;
  z-index: 9001;

  background: #303841;
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
