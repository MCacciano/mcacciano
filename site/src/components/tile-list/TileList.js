import React from 'react'

// components
import TileListItem from '../tile-list-item/TileListItem'

// styled components
import { StyledTileList } from './PageTileList.styles'

const TileList = () => {
  return (
    <StyledTileList>
      <TileListItem to="/about" title="About" bg="hero-1.jpg" />
      <TileListItem to="/work" title="Work" bg="hero-2.jpg" />
      <TileListItem to="/github" title="Github" bg="github-tile.png" />
      <TileListItem to="/blog" title="Blog" bg="blog-tile.jpg" />
    </StyledTileList>
  )
}

export default TileList
