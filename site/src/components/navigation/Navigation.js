import React from 'react'

import { useChain, useTransition, useSpring } from 'react-spring'

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

  const [isOpen, setIsOpen] = React.useState(false)
  const [navLinks, setNavLinks] = React.useState([])

  const menuRef = React.useRef()
  const [navSpring, set] = useSpring(() => ({
    to: { width: '0vw' },
    // ref: navSpringRef,
  }))

  // const navSpringItemRef = React.useRef()
  // const navItemSpring = useSpring(() => ({
  //   config: {
  //     clamp: true,
  //     velocity: 10,
  //   },
  //   from: { transform: 'scale(0)' },
  //   to: { transform: 'scale(1)' },
  //   ref: navSpringItemRef,
  // }))

  const itemRef = React.useRef()
  const transitions = useTransition(navLinks, item => item.text, {
    from: { transform: 'scale(0)', opacity: 0 },
    enter: { transform: 'scale(1)', opacity: 1 },
    leave: { transform: 'scale(0)', opacity: 0 },
    // ref: navItemTransRef,
  })

  useChain([menuRef, itemRef])

  const toggleMobileNav = () => {
    setIsOpen(!isOpen)

    if (navLinks.length) {
      setNavLinks([])
    } else {
      setNavLinks(navItems)
    }

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
            <MobileNav style={navSpring}>
              {transitions.map(({ item: { to, text }, key, props }) => (
                <MobileNavItem style={props} key={key}>
                  <GLink activeClassName="active" to={to}>
                    {text}
                  </GLink>
                </MobileNavItem>
              ))}
            </MobileNav>
          </Li>
        </Ul>
      </div>
    </Nav>
  )
}

export default Navigation
