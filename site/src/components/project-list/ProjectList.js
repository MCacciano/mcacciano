import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import { Projects } from "./ProjectList.styles"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      desktop: file(relativePath: { eq: "blog-tile.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  const imageData = data.desktop.childImageSharp.fluid

  return (
    <Projects>
      <BackgroundImage Tag="li" fluid={imageData}>
        <a href="/">
          <div>One</div>
        </a>
      </BackgroundImage>
      <BackgroundImage Tag="li" fluid={imageData}>
        <a href="/">
          <div>Two</div>
        </a>
      </BackgroundImage>
      <BackgroundImage Tag="li" fluid={imageData}>
        <a href="/">
          <div>Three</div>
        </a>
      </BackgroundImage>
      <BackgroundImage Tag="li" fluid={imageData}>
        <a href="/">
          <div>Four</div>
        </a>
      </BackgroundImage>
      <BackgroundImage Tag="li" fluid={imageData}>
        <a href="/">
          <div>Five</div>
        </a>
      </BackgroundImage>
      <BackgroundImage Tag="li" fluid={imageData}>
        <a href="/">
          <div>Six</div>
        </a>
      </BackgroundImage>
      <BackgroundImage Tag="li" fluid={imageData}>
        <a href="/">
          <div>Six</div>
        </a>
      </BackgroundImage>
    </Projects>
  )
}
