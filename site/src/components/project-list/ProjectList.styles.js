import styled from "styled-components"

export const Projects = styled.ul`
  /* display: flex;
  flex-flow: row wrap;
  justify-content: space-between; */
  padding: 1rem;
  display: grid;
  /* grid-template-columns: 1fr 1fr 1fr; */
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));

  @media screen and (max-width: 430px) {
    grid-template-columns: 1fr;
  }

  li {
    height: 300px;
    margin: 1rem;
    position: relative;

    /* background: url(./blog-tile.jpg);
    background-size: cover;
    background-position: top; */
    z-index: -1;

    /* &:after {
      content: "";
      display: block;
      width: 100%;
      height: 100%;
      position: absolute;
      background: rgba(15, 76, 117, 0.6);
      top: 0;
      left: 0;
      z-index: -1;
    } */

    a {
      display: block;
      height: 100%;
      padding: 1rem;

      border: 2px solid #1b262c;
      color: #f7f7f7;
      z-index: 1;
    }
  }
`
