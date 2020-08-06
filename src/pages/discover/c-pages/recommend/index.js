import React, { memo } from 'react'

import { RecommendWrapper } from './style';
import YDTopBannner from './c-cpns/top-banner';

function YDRecommend(props) {

  return (
    <RecommendWrapper>
      <YDTopBannner/>
    </RecommendWrapper>
  )
}

/* const mapSateToProps = state => ({
  topBanners: state.recommend.topBanners
})

const mapDispatchToProps = dispatch => ({
  getBanners: () => {
    dispatch(getTopBannerAction())
  }
}) */

// export default connect(mapSateToProps, mapDispatchToProps)(memo(YDRecommend))
export default memo(YDRecommend)
