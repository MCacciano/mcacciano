import styled, { keyframes } from "styled-components"

const growRight = keyframes`
  from {
    max-width: 0;
  }

  to {
    max-width: 100%;
  }
`

export const WorkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Title = styled.h1`
  font-family: "Rubik";
  padding: 1rem;
  position: relative;
  font-size: 3.5em;
`
