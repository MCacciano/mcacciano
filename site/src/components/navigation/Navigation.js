import React from 'react'

import { Nav, Logo, Ul, Li, GLink, BurgerMenu } from './Navigation.styles'

const Navigation = () => {
  return (
    <Nav>
      <div>
        <Logo>
          <GLink to="/">Michael Cacciano</GLink>
        </Logo>
        <Ul>
          <Li>
            <GLink to="/work">Work</GLink>
          </Li>
          <Li>
            <GLink to="/blog">Blog</GLink>
          </Li>
          <Li>
            <GLink to="/about">About</GLink>
          </Li>
          <Li>
            <BurgerMenu className="fa fa-bars fa-2x" />
          </Li>
        </Ul>
      </div>
    </Nav>
  )
}

export default Navigation
