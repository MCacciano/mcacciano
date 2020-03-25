import React from 'react'

import { useStaticQuery, graphql } from 'gatsby'
import { useTrail } from 'react-spring'

// styled components
import {
  HeroWrapper,
  HeroCopyWrapper,
  HeroCopy,
  Span,
  H1,
  H3,
  H2,
} from './Hero.styles'

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
    { icon: 'github', href: 'https://www.github.com/mcacciano' },
    { icon: 'twitter', href: 'https://www.twitter.com/king_kooka' },
    { icon: 'linkedin', href: 'https://www.linkedin.com/in/michaelcacciano/' },
  ]

  // const trail = useTrail(SOCIAL_LINKS.length, {
  //   transform: 'scale(1)',
  //   opacity: 1,
  //   trail: 500,
  //   from: { transform: 'scale(0.1)', opacity: '0.1' },
  // })

  return (
    <HeroWrapper imageData={imageData}>
      <div class="overlay overlay-black"></div>
      <div class="overlay overlay-blue"></div>
      <HeroCopyWrapper>
        <HeroCopy>
          <H1>
            <Span highlightWidth={97} left="4px">
              Michael Cacciano
            </Span>
          </H1>
          <H2>
            <Span>Full </Span>
            <Span>Stack </Span>
            <Span>Developer </Span>
          </H2>
          <H3>
            <Span fontWeight={300} highlightWidth={89} left="3px">
              Passion{' '}
            </Span>
            for creating{' '}
            <Span fontWeight={300} highlightWidth={90} left="2px">
              simplistic{' '}
            </Span>
            and{' '}
            <Span fontWeight={300} highlightWidth={92} left="2px">
              engaging{' '}
            </Span>
            experiences on the web
          </H3>
          {/* <SocialList>
            {trail.map(({ ...styles }, i) => {
              const { href, icon } = SOCIAL_LINKS[i]

              return (
                <SocialListItem key={i} style={{ ...styles }}>
                  <a
                    href={href}
                    className={icon}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SocialListIcon className={`fab fa-${icon} fa-2x`} />
                  </a>
                </SocialListItem>
              )
            })}
          </SocialList> */}
        </HeroCopy>
      </HeroCopyWrapper>
    </HeroWrapper>
  )
}

export default Hero
