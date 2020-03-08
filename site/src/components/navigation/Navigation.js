import React from 'react'

// import { useChain, useTransition, useSpring } from 'react-spring'
import { Keyframes } from 'react-spring/renderprops'

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
  const Testerer = Keyframes.Spring({
    openAndClose: [{ width: '0vw' }, { width: '100vw' }],
  })
  // const [navLinks, setNavLinks] = React.useState([])

  // const menuRef = React.useRef()
  // const [navSpring, set] = useSpring(() => ({
  //   to: { width: '0vw' },
  //   ref: menuRef,
  // }))

  // const itemRef = React.useRef()
  // const transitions = useTransition(navLinks, item => item.text, {
  //   from: { transform: 'scale(0)', opacity: 0 },
  //   enter: { transform: 'scale(1)', opacity: 1 },
  //   leave: { transform: 'scale(0)', opacity: 0 },
  //   ref: itemRef,
  // })

  // useChain([menuRef, itemRef])

  const toggleMobileNav = () => {
    console.log(isOpen)
    setIsOpen(!isOpen)

    // if (isOpen) {
    //   set({ width: '0vw' })
    //   setNavLinks([])
    // } else {
    //   set({ width: '100vw' })
    //   setNavLinks(navItems)
    // }
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
            <Testerer state="openAndClose">
              {styles => (
                <MobileNav style={styles}>
                  {navItems.map(({ to, text }, i) => (
                    <MobileNavItem key={i}>
                      <GLink activeClassName="active" to={to}>
                        {text}
                      </GLink>
                    </MobileNavItem>
                  ))}
                </MobileNav>
              )}
            </Testerer>
          </Li>
        </Ul>
      </div>
    </Nav>
  )
}

export default Navigation
