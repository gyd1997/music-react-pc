import React, { memo } from 'react'

import YDThemeHeaderRCM from '@/components/theme-header-rcm'
import { RankingWrapper } from './style'

export default memo(function YDRecommendRanking() {
  return (
    <RankingWrapper>
      <YDThemeHeaderRCM title="榜单"/>
    </RankingWrapper>
  )
})
