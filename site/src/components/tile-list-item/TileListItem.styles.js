import styled from 'styled-components'
import { animated } from 'react-spring'
import { Link } from 'gatsby'

export const Tile = styled(animated.div)`
  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid #0e0d0d;
  border-radius: 5px;
  color: #f7f7f7;

  z-index: 1;
  position: relative;
  background-size: cover;
  background: ${({ bg }) => (bg ? `url(./${bg}) no-repeat top/cover` : `#777`)};

  h2 {
    width: 100%;
    height: 100%;
    font-size: 2rem;
    letter-spacing: 1px;
  }

  &:after {
    content: '';
    display: block;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.4);
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -1;
  }
`
export const TileLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 3rem;
  font-weight: 300;

  &:visited {
    color: #f7f7f7;
  }
`
