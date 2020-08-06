import React, { memo } from 'react'

import {
  RecommendWrapper,
  Content,
  RecommendLeft,
  RecommendRight
} from './style';
import YDTopBannner from './c-cpns/top-banner';
import YDHotRecommend from './c-cpns/hot-recommend'
import YDNewAlbum from './c-cpns/new-album'
import YDRecommendRanking from './c-cpns/recommend-ranking'

function YDRecommend(props) {

  return (
    <RecommendWrapper>
      <YDTopBannner/>
      <Content className="wrap-v2">
        <RecommendLeft>
          <YDHotRecommend/>
          <YDNewAlbum/>
          <YDRecommendRanking/>
        </RecommendLeft>
        <RecommendRight></RecommendRight>
      </Content>
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
