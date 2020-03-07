import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"

// styled components
import {
  HeroWrapper,
  HeroImage,
  HeroCopyWrapper,
  HeroCopy,
  Span,
  // SocialList,
  // SocialListItem,
  // SocialLink,
} from "./Hero.styles"
// rgba(226, 192, 68, 0.5)
const Hero = () => {
  const SOCIAL_LINKS = [
    { name: "github", url: "https://www.github.com/mcacciano" },
    { name: "twitter", url: "https://www.twitter.com/king_kooka" },
    { name: "linkedin", url: "https://www.linkedin.com/in/michaelcacciano/" },
  ]

  return (
    <HeroWrapper>
      <HeroCopyWrapper>
        <HeroCopy>
          <ul>
            <li>
              <Link to="/">
                <i className="fab fa-linkedin fa-2x" />
              </Link>
            </li>
            <li>
              <Link to="/">
                <i className="fab fa-github fa-2x" />
              </Link>
            </li>
            <li>
              <Link to="/">
                <i className="fab fa-twitter fa-2x" />
              </Link>
            </li>
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
              <Span fontWeight={400} hWidth={89} left="3px">
                Passion{" "}
              </Span>
              for creating{" "}
              <Span fontWeight={400} hWidth={90} left="2px">
                engaging{" "}
              </Span>
              and{" "}
              <Span fontWeight={400} hWidth={92} left="2px">
                simplistic{" "}
              </Span>
              experiences on the web
            </h3>
          </div>
        </HeroCopy>
      </HeroCopyWrapper>
      {/* <HeroImage /> */}
      {/* <HeroCopy>
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
          with a{" "}
          <Span fontWeight={400} hWidth={89} left="3px">
            passion{" "}
          </Span>
          for creating{" "}
          <Span fontWeight={400} hWidth={83} left="1px">
            cool{" "}
          </Span>
          and{" "}
          <Span fontWeight={400} hWidth={92} left="2px">
            simplistic{" "}
          </Span>
          experiences on the web
        </h3>
      </HeroCopy>
      <div id="hero-img"></div> */}
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
