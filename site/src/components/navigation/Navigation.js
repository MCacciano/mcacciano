import React from 'react'

import { useChain, useSpring } from 'react-spring'

import {
  Nav,
  MobileNav,
  Logo,
  Ul,
  Li,
  GLink,
  BurgerMenu,
} from './Navigation.styles'

const Navigation = props => {
  const [isOpen, setIsOpen] = React.useState(false)

  const [navProps, set] = useSpring(() => ({ width: '0vw' }))

  const navItems = [
    {
      to: '/work',
      text: 'Work',
    },
    {
      to: '/blog',
      text: 'Blog',
    },
    {
      to: '/about',
      text: 'About',
    },
    {
      to: '/contact',
      text: 'Contact',
    },
  ]

  const toggleMobileNav = () => {
    setIsOpen(!isOpen)
    set({ width: isOpen ? '0vw' : '100vw' })
  }

  return (
    <Nav>
      <div>
        <Logo>
          <GLink to="/">Michael Cacciano</GLink>
        </Logo>
        <Ul>
          {navItems.map(({ to, text }, i) => (
            <Li key={i}>
              <GLink activeClassName="active" to={to}>
                {text}
              </GLink>
            </Li>
          ))}
          <Li>
            <BurgerMenu
              className="fa fa-bars fa-2x"
              onClick={toggleMobileNav}
            />
            <MobileNav style={navProps}>
              {navItems.map(({ to, text }, i) => (
                <li key={i}>
                  <GLink activeClassName="active" to={to}>
                    {text}
                  </GLink>
                </li>
              ))}
            </MobileNav>
          </Li>
        </Ul>
      </div>
    </Nav>
  )
}

export default Navigation
