import styled, { keyframes } from "styled-components"

const growRight = keyframes`
  from {
    max-width: 0;
  }

  to {
    max-width: 100%;
  }
`

export const HeroWrapper = styled.div`
  display: grid;
  grid-template-columns: 60% 40%;

  height: 92vh;
  color: #1b262c;

  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr;
    background: #0f4c75;
    color: #f7f7f7;
  }
`

export const HeroCopyWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`

export const HeroCopy = styled.div`
  display: grid;
  grid-template-columns: 10% 90%;
  align-content: center;

  height: 40vh;
  line-height: 1.1;
  padding: 1rem;
  width: 100%;

  @media screen and (max-width: 640px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }

  h1 {
    font-size: 4.5rem;
    font-weight: 900;
    font-family: "Rubik";

    @media screen and (max-width: 1360px) {
      font-size: 4rem;
    }
  }

  h2 {
    font-size: 4rem;
    font-weight: 400;
    font-family: "Rubik";

    @media screen and (max-width: 1360px) {
      font-size: 2.5rem;
    }
  }

  h3 {
    font-size: 2.5rem;
    font-weight: 100;
    margin-top: 1rem;

    @media screen and (max-width: 1360px) {
      font-size: 2rem;
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 1rem 0;

    @media screen and (max-width: 640px) {
      flex-direction: row;
      grid-row: 2;
    }

    li {
      a {
        display: block;
        height: 100%;
        padding: 1rem;
        color: #1b262c;

        i {
          color: #1b262c;
          @media screen and (max-width: 1360px) {
            font-size: 1.5rem;
          }

          @media screen and (max-width: 900px) {
            font-size: 2rem;
            color: #f7f7f7;
          }
        }
      }
    }
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem;
  }
`

export const HeroImage = styled.div`
  background: url(./hero-2.jpg);
  background-size: cover;
  background-position: top right;
  position: relative;

  @media screen and (max-width: 900px) {
    display: none;
  }

  &:after {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    background: rgba(0, 0, 0, 0.6);
    top: 0;
    left: 0;
    z-index: 1;

    @media screen and (max-width: 900px) {
      display: none;
    }
  }
`

export const Span = styled.span`
  font-size: ${({ fontSize }) => `${fontSize}rem`};
  font-weight: ${({ fontWeight }) => `${fontWeight}`};
  letter-spacing: 1px;
  vertical-align: bottom;
  position: relative;

  @media screen and (max-width: 701px) {
    font-size: ${({ fontSize }) => `${fontSize - 0.5}rem`};
  }

  @media screen and (max-width: 701px) {
    font-size: ${({ fontSize }) => `${fontSize - 1}rem`};
  }

  &:after {
    content: "";
    position: absolute;
    top: 60%;
    left: ${({ left }) => (left ? `${left}` : "0")};
    width: ${({ hWidth }) => (hWidth ? `${hWidth}%` : "0")};
    height: 30%;
    background: #3282b8;
    opacity: 0.5;
    z-index: -1;
    max-width: 0;
    animation: ${growRight} ease-in 1s forwards;
  }
`

// export const HeroContainer = styled.div`
//   display: flex;
//   justify-content: flex-start;
//   align-items: center;

//   width: 100%;
//   height: 92vh;
//   z-index: 1;

//   background: #f7f7f7;
//   position: relative;

//   #hero-img {
//     height: 100%;
//     width: 100%;
//     position: absolute;
//     left: 0;
//     top: 0;
//     background: url(./hero-2.jpg);
//     background-size: cover;
//     background-position: right;

//     &:after {
//       content: "";
//       display: block;
//       width: 100%;
//       height: 100%;
//       position: absolute;
//       background: rgba(0, 0, 0, 0.6);
//       top: 0;
//       left: 0;
//       z-index: 1;
//     }
//   }

//   i {
//     z-index: 2;
//     border-radius: 50%;
//     color: #f7f7f7;
//     padding: 10px 12px;
//     border: 1px solid #f7f7f7;

//     &.github {
//       background: rgba(26, 23, 23, 1);
//     }

//     &.twitter {
//       background: rgba(29, 161, 242, 1);
//     }

//     &.linkedin {
//       background: rgba(0, 115, 176, 1);
//     }

//     &.instagram {
//       background: rgba(146, 63, 151, 1);
//     }
//   }

// `

// export const SocialList = styled.ul`
//   display: flex;
//   width: 100%;
//   max-width: 300px;
//   justify-content: space-between;
//   margin: 40px 0;
//   z-index: 2;
// `

// export const SocialListItem = styled.li``

// export const SocialLink = styled.a``

// export const HeroCopy = styled.p`
//   font-size: 2.5rem;
//   font-weight: 100;
//   color: #f7f7f7;
//   background: #0f4c75;

//   /* color: rgba(26, 23, 23, 1); */
//   /* background: #f7f7f7; */
//   text-align: left;
//   z-index: 2;
//   max-width: 810px;
//   padding: 30px;
//   margin: 0 50px;
//   line-height: 1.2;
//   border-radius: 5px;

//   #hr {
//     display: block;
//     height: 2px;
//     width: 80%;
//     background: #3282b8;
//     margin: 1rem auto 0.5rem;
//   }

//   @media screen and (max-width: 760px) {
//     text-align: center;
//     font-size: 2.25rem;
//     margin: 0 25px;
//   }
// `
