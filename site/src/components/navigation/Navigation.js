import React from 'react'

import { Nav, Logo, Ul, Li, GLink, BurgerMenu } from './Navigation.styles'

const Navigation = () => {
  const [isMobile, setIsMobile] = React.useState(false)

  React.useEffect(() => {
    window.addEventListener('resize', e => {
      if (window.matchMedia('(max-width: 660px)').matches) {
        console.log('matches')
      }
    })
  }, [window.matchMedia('(max-width: 660px)').matches])

  const navItems = [
    {
      to: '/',
      text: 'Work',
    },
    {
      to: '/',
      text: 'Blog',
    },
    {
      to: '/',
      text: 'About',
    },
  ]

  return (
    <Nav>
      <div>
        <Logo>
          <GLink to="/">Michael Cacciano</GLink>
        </Logo>
        <Ul>
          {!isMobile &&
            navItems.map(({ to, text }) => (
              <Li>
                <GLink activeClassName="active" to={to}>
                  {text}
                </GLink>
              </Li>
            ))}
          <Li>
            <BurgerMenu className="fa fa-bars fa-2x" />
            {isMobile &&
              navItems.map(({ to, text }) => (
                <Li>
                  <GLink activeClassName="active" to={to}>
                    {text}
                  </GLink>
                </Li>
              ))}
          </Li>
        </Ul>
      </div>
    </Nav>
  )
}

export default Navigation
