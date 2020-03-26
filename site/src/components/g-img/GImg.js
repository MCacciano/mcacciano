import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const GImg = ({ img, imgStyle }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const { fluid } = data.placeholderImage.childImageSharp

  return <Img imgStyle={{ ...imgStyle }} fluid={img || fluid} />
}

export default GImg
