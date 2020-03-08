import React from 'react'

import {
  Nav,
  MobileNav,
  Logo,
  Ul,
  Li,
  GLink,
  BurgerMenu,
} from './Navigation.styles'

const Navigation = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const [width, setWidth] = React.useState('')

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
    if (isOpen) {
      setWidth('0')
    } else {
      setWidth('100vw')
    }
    setIsOpen(!isOpen)
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
            <MobileNav width={width}>
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
