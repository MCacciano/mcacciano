import React from "react"

// styled components
import {
  HeroWrapper,
  HeroCopyWrapper,
  HeroCopy,
  Span,
  // SocialList,
  // SocialListItem,
  // SocialLink,
} from "./Hero.styles"

const Hero = () => {
  const SOCIAL_LINKS = [
    { icon: "github", href: "https://www.github.com/mcacciano" },
    { icon: "twitter", href: "https://www.twitter.com/king_kooka" },
    { icon: "linkedin", href: "https://www.linkedin.com/in/michaelcacciano/" },
  ]

  return (
    <HeroWrapper>
      <HeroCopyWrapper>
        <HeroCopy>
          <ul>
            {SOCIAL_LINKS.map(({ icon, href }) => (
              <li>
                <a href={href}>
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

      {/* <SocialList>
        {SOCIAL_LINKS.map(({ name, url }) => (
          <SocialListItem key={name}>
            <SocialLink href={url} target="_blank">
              <i className={`fab fa-${name} fa-2x ${name}`} />
            </SocialLink>
          </SocialListItem>
        ))}
      </SocialList> */}
    </HeroWrapper>
  )
}

export default Hero
