import React from 'react'

import { useStaticQuery, graphql } from 'gatsby'
import { useTrail } from 'react-spring'

// styled components
import {
  HeroWrapper,
  HeroCopyWrapper,
  HeroCopy,
  Span,
  SocialList,
  SocialListItem,
  SocialListIcon,
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

  const trail = useTrail(SOCIAL_LINKS.length, {
    transform: 'scale(1)',
    opacity: 1,
    trail: 500,
    from: { transform: 'scale(0.1)', opacity: '0.1' },
  })

  return (
    <HeroWrapper imageData={imageData}>
      <div class="overlay overlay-black"></div>
      <div class="overlay overlay-blue"></div>
      {/* <div id="oval-1" class="hero-oval"></div> */}
      {/* <div id="oval-1" class="hero-oval"></div>
      <div id="oval-2" class="hero-oval"></div>
      <div id="oval-3" class="hero-oval"></div> */}
      <HeroCopyWrapper>
        <HeroCopy>
          <H1>
            <Span hWidth={97} left="4px">
              Michael Cacciano
            </Span>
          </H1>
          <H2>
            <Span>Front </Span>
            <Span>End </Span>
            <Span>Developer </Span>
          </H2>
          <H3>
            <Span fontWeight={300} hWidth={89} left="3px">
              Passion{' '}
            </Span>
            for creating{' '}
            <Span fontWeight={300} hWidth={90} left="2px">
              simplistic{' '}
            </Span>
            and{' '}
            <Span fontWeight={300} hWidth={92} left="2px">
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
      {/* q<HeroCopyWrapper>
        <HeroCopy>
          <SocialList>
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
          </SocialList>
          <div>
            <h1>
              <Span hWidth={97} left="4px">
                Michael Cacciano{' '}
              </Span>
            </h1>
            <h2>
              <Span>Front </Span>
              <Span>End </Span>
              <Span>Developer </Span>
            </h2>
            <h3>
              <Span fontWeight={300} hWidth={89} left="3px">
                Passion{' '}
              </Span>
              for creating{' '}
              <Span fontWeight={300} hWidth={90} left="2px">
                simplistic{' '}
              </Span>
              and{' '}
              <Span fontWeight={300} hWidth={92} left="2px">
                engaging{' '}
              </Span>
              experiences on the web
            </h3>
          </div>
        </HeroCopy>
      </HeroCopyWrapper> */}
    </HeroWrapper>
  )
}

export default Hero
