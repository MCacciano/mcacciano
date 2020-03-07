import React from 'react'

import { useStaticQuery, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

const BackgroundImg = ({
  children,
  tag,
  imageData,
  backgroundColor,
  className,
}) => {
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
      tag={tag || 'div'}
      fluid={imageData || defaultImg}
      backgroundColor={backgroundColor || ''}
    >
      {children}
    </BackgroundImage>
  )
}

export default BackgroundImg
