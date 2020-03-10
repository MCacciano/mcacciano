import React from 'react'
import PropTypes from 'prop-types'

import Navigation from '../navigation/Navigation'

import { GlobalStyles } from './MainLayout.styles'

const MainLayout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <header style={{ position: 'sticky', zIndex: '9001', top: '0' }}>
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
