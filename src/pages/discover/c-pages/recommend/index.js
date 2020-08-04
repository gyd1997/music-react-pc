import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getTopBannerAction } from './store/actionCreators';

function YDRecommend(props) {

  const { topBanners } = useSelector(state => ({
    topBanners: state.recommend.topBanners
  }))
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTopBannerAction())
  }, [dispatch])

  return (
    <div>
      <h2>YDRecommend: {topBanners.length}</h2>
    </div>
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
