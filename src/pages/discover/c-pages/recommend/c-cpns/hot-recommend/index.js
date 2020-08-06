import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import YDSongsCover from '@/components/songs-cover'

import { HOT_RECOMMENDS_COUNT } from '@/common/constants'
import {
  HotRecommendWrapper
} from './style'
import HYThemeHeaderRCM from '@/components/theme-header-rcm'
import { getHotRecommendAction } from '../../store/actionCreators';

export default memo(function YDHotRecommend() {

  const dispatch = useDispatch()
  const { hotRecommends } = useSelector(state => ({
    hotRecommends: state.getIn(['recommend', 'hotRecommends'])
  }), shallowEqual)

  useEffect(() => {
    dispatch(getHotRecommendAction(HOT_RECOMMENDS_COUNT))
  }, [dispatch])

  return (
    <HotRecommendWrapper>
      <HYThemeHeaderRCM title="热门推荐" keywords={['华语', '流行', '民谣', '摇滚', '电子']}/>
      <div className="recommend-list">
        {
          hotRecommends.map((item, index) => {
            return (
              <YDSongsCover key={item.id} info={item}/>
            )
          })
        }
      </div>
    </HotRecommendWrapper>
  )
})
