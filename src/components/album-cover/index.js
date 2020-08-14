import React, { memo } from 'react'

import { getSizeImage } from '@/utils/format-utils'

import { AlbumWrapper } from './style'
export default memo(function YDAlbumCover(props) {
  const { info, width = 153, size = 130, bgp = '-845px' } = props
  return (
    <AlbumWrapper size={size} width={width} bgp={bgp}>
      <div className="album-image">
        <img src={getSizeImage(info.picUrl)} alt=""/>
        {/* eslint-disable-next-line */}
        <a className="cover image_cover" href="/todo"></a>
      </div>
      <div className="album-info">
        <div className="name text-wrap">{info.name}</div>
        <div className="artist text-wrap">{info.artist.name}</div>
      </div>
    </AlbumWrapper>
  )
})
