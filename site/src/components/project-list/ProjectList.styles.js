import styled from 'styled-components'

export const Projects = styled.ul`
  display: grid;

  grid-template-columns: 1fr 1fr;

  img {
    height: 300px;
    width: 300px;
  }
`

export const Project = styled.li``

// export const Projects = styled.ul`
//   /* display: flex;
//   flex-flow: row wrap;
//   justify-content: space-between; */
//   padding: 1rem;
//   display: grid;
//   /* grid-template-columns: 1fr 1fr 1fr; */
//   grid-template-columns: repeat(auto-fit, minmax(400px, 520px));

//   @media screen and (max-width: 430px) {
//     grid-template-columns: 1fr;
//   }

//   li {
//     height: 350px;
//     margin: 1rem;
//     position: relative;

//     /* background: url(./blog-tile.jpg);
//     background-size: cover;
//     background-position: top; */

//     /* &:after {
//       content: "";
//       display: block;
//       width: 100%;
//       height: 100%;
//       position: absolute;
//       top: 0;
//       left: 0;
//       z-index: -1;
//     } */

//     a {
//       display: flex;
//       justify-content: center;
//       align-items: center;
//       height: 100%;
//       padding: 1rem;

//       color: #f7f7f7;
//       cursor: pointer;
//       position: relative;
//       border: 1px solid #000;

//       div {
//         background-color: rgba(15, 76, 117, 1);
//         padding: 0.5rem;
//         font-size: 1.5rem;
//       }

//       &:after {
//         height: 100%;
//         width: 100%;
//         display: block;
//         content: '';
//         position: absolute;
//         top: 0;
//         left: 0;
//         background: rgba(0, 0, 0, 0.6);
//         /* background: rgba(15, 76, 117, 0.6); */
//         /* background: linear-gradient(
//           to right,
//           rgba(0, 0, 0, 0.6) 40%,
//           rgba(15, 76, 117, 0.8)
//         ); */
//         z-index: -1;
//       }
//     }
//   }
// `
