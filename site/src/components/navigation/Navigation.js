import React from 'react'

import { useChain, useTransition, config } from 'react-spring'

import {
  Nav,
  MobileNav,
  MobileNavItem,
  Logo,
  Ul,
  Li,
  GLink,
  BurgerMenu,
} from './Navigation.styles'

const Navigation = () => {
  const [isOpen, setIsOpen] = React.useState(null)
  const [navItems] = React.useState([
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
  ])

  const sideBarRef = React.useRef()
  const transition = useTransition(isOpen, null, {
    from: {
      width: '0vw',
    },
    enter: {
      width: '100vw',
    },
    leave: {
      width: '0vw',
    },
    unique: true,
    config: config.stiff,
    ref: sideBarRef,
  })

  const navItemsRef = React.useRef()
  const trail = useTransition(isOpen ? navItems : [], item => item.text, {
    from: {
      opacity: 0,
      transform: 'scale(0)',
    },
    enter: {
      opacity: 1,
      transform: 'scale(1)',
    },
    leave: {
      opacity: 0,
      transform: 'scale(0)',
    },
    ref: navItemsRef,
    config: config.wobbly,
    trail: 100,
    unique: true,
  })

  useChain(
    isOpen ? [sideBarRef, navItemsRef] : [navItemsRef, sideBarRef],
    isOpen ? [0, 0.25] : [0, 0.6]
  )
  const toggleMobileNav = () => {
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
            {transition.map(({ item, key, props }) =>
              item ? (
                <MobileNav key={item} style={props}>
                  {trail.map(({ item: { to, text }, key, props }, i) => (
                    <MobileNavItem key={i} style={props}>
                      <GLink activeClassName="active" to={to}>
                        {text}
                      </GLink>
                    </MobileNavItem>
                  ))}
                </MobileNav>
              ) : null
            )}
          </Li>
        </Ul>
      </div>
    </Nav>
  )
}

export default Navigation
