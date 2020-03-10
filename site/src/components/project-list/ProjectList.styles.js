import styled from 'styled-components'

/* rgba(15, 76, 117, 0.6); */

export const Projects = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 445px));
  justify-content: center;
  grid-auto-rows: 1fr;
  gap: 20px;

  margin: 0 30px;
`

export const Project = styled.li`
  border-radius: 5px;
  max-height: max-content;

  .gatsby-image-wrapper {
    &:after {
      display: block;
      content: '';
      position: absolute;
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
      /* background-color: ${({ overlay }) => `${overlay}`}; */
      border: ${({ overlay }) => (overlay ? `thin solid ${overlay}` : '')};
      border-radius: 5px;
    }
  }
`
