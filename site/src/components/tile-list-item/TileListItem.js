import React from 'react'

import { Tile, TileLink } from './TileListItem.styles'

const TileListItem = ({ title, bg, to }) => {
  return (
    <Tile bg={bg}>
      <h2>
        <TileLink to={to}>{title}</TileLink>
      </h2>
    </Tile>
  )
}

export default TileListItem
