import React from 'react'

import { useStaticQuery, graphql, Link } from 'gatsby'
// import { useTrail } from 'react-spring'

// styled components
import { HeroSection } from './Hero.styles'

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

  const { fluid } = data.desktop.childImageSharp

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
    <HeroSection className="hero" Tag="section" fluid={fluid}>
      <div class="overlay overlay-black"></div>
      <div className="hero-copy-wrapper">
        <div className="hero-copy">
          <h1>
            <span class="first-letter">M</span>ichael{' '}
            <span class="first-letter">C</span>acciano
          </h1>
          <h2>Full Stack Developer</h2>
          <h3>
            <span class="em">Passion</span> for creating{' '}
            <span class="em">simplistic</span> and{' '}
            <span class="em">engaging</span> experiences on the web
          </h3>
          <div className="ctas">
            <Link to="/work" className="cta">
              Work
            </Link>
            <Link to="/blog" className="cta">
              Blog
            </Link>
          </div>
        </div>
      </div>
    </HeroSection>
  )
}

export default Hero

/**
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
*/
