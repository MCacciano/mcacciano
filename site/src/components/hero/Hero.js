import PropTypes from "prop-types"
import React from "react"

// styled components
import {
  HeroContainer,
  HeroCopy,
  Span,
  SocialList,
  SocialListItem,
  SocialLink,
} from "./Hero.styles"
// rgba(226, 192, 68, 0.5)
const Hero = () => {
  const SOCIAL_LINKS = [
    { name: "github", url: "https://www.github.com/mcacciano" },
    { name: "twitter", url: "https://www.twitter.com/king_kooka" },
    { name: "linkedin", url: "https://www.linkedin.com/in/michaelcacciano/" },
  ]

  return (
    <HeroContainer>
      <HeroCopy>
        <Span isLarge={true} fontSize="4">
          Front{" "}
        </Span>
        <Span isLarge={true} fontSize="4">
          End{" "}
        </Span>
        <Span isLarge={true} fontSize="4">
          Developer{" "}
        </Span>
        <span id="hr" />
        with a <Span fontSize="2.75">passion </Span>
        for creating <Span fontSize="2.75">cool </Span>
        and <Span fontSize="2.75">simplistic </Span>
        things on the web
      </HeroCopy>
      {/* <SocialList>
        {SOCIAL_LINKS.map(({ name, url }) => (
          <SocialListItem key={name}>
            <SocialLink href={url} target="_blank">
              <i className={`fab fa-${name} fa-2x ${name}`} />
            </SocialLink>
          </SocialListItem>
        ))}
      </SocialList> */}
    </HeroContainer>
  )
}

export default Hero
