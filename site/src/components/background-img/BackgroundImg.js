import React from 'react'
import PropTypes from 'prop-types'

import { useStaticQuery, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

const BackgroundImg = ({ children, tag, img, backgroundColor, className }) => {
  const data = useStaticQuery(graphql`
    query {
      desktop: file(relativePath: { eq: "gatsby-icon.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const defaultImg = data.desktop.childImageSharp.fluid

  return (
    <BackgroundImage
      className={className}
      tag={tag}
      fluid={img || defaultImg}
      backgroundColor={backgroundColor}
    >
      {children}
    </BackgroundImage>
  )
}

BackgroundImg.propTypes = {
  tag: PropTypes.string,
  img: PropTypes.string,
  backgroundColor: PropTypes.string,
  className: PropTypes.string,
}

BackgroundImg.defaultProps = {
  tag: 'div',
  backgroundColor: '',
  className: 'bg-image',
  img: '',
}

export default BackgroundImg
