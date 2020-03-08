import React from 'react'
import PropTypes from 'prop-types'

import Navigation from '../navigation/Navigation'

import { GlobalStyles } from './MainLayout.styles'

const MainLayout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <header>
        <Navigation />
      </header>
      <main>{children}</main>
    </>
  )
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MainLayout
