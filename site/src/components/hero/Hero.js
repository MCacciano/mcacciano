import React from "react"

import { useStaticQuery, graphql } from "gatsby"

// styled components
import { HeroWrapper, HeroCopyWrapper, HeroCopy, Span } from "./Hero.styles"

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      desktop: file(relativePath: { eq: "hero-2.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const imageData = data.desktop.childImageSharp.fluid

  const SOCIAL_LINKS = [
    { icon: "github", href: "https://www.github.com/mcacciano" },
    { icon: "twitter", href: "https://www.twitter.com/king_kooka" },
    { icon: "linkedin", href: "https://www.linkedin.com/in/michaelcacciano/" },
  ]

  return (
    <HeroWrapper imageData={imageData}>
      <HeroCopyWrapper>
        <HeroCopy>
          <ul>
            {SOCIAL_LINKS.map(({ icon, href }) => (
              <li>
                <a href={href} className={icon} target="_blank">
                  <i className={`fab fa-${icon} fa-2x`} />
                </a>
              </li>
            ))}
          </ul>
          <div>
            <h1>
              <Span hWidth={97} left="4px">
                Michael Cacciano{" "}
              </Span>
            </h1>
            <h2>
              <Span>Front </Span>
              <Span>End </Span>
              <Span>Developer </Span>
            </h2>
            <h3>
              <Span fontWeight={300} hWidth={89} left="3px">
                Passion{" "}
              </Span>
              for creating{" "}
              <Span fontWeight={300} hWidth={90} left="2px">
                simplistic{" "}
              </Span>
              and{" "}
              <Span fontWeight={300} hWidth={92} left="2px">
                engaging{" "}
              </Span>
              experiences on the web
            </h3>
          </div>
        </HeroCopy>
      </HeroCopyWrapper>
    </HeroWrapper>
  )
}

export default Hero
