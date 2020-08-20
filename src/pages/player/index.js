import React, { memo } from 'react'

import {
  PlayerWrapper,
  PlayerLeft,
  PlayerRight
} from './style'

export default memo(function YDPlayer() {
  return (
    <PlayerWrapper>
      <div className="content wrap-v2">
        <PlayerLeft>
          <h2>11111</h2>
          <h2>22222</h2>
        </PlayerLeft>
        <PlayerRight>
          <h2>33333</h2>
          <h2>44444</h2>
          <h2>55555</h2>
        </PlayerRight>
      </div>
    </PlayerWrapper>
  )
})
