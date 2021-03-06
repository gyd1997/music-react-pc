import React, { memo, useEffect, useRef, useState, useCallback } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { getTopBannerAction } from '../../store/actionCreators'

import { Carousel } from 'antd';
import { 
  BannerWrapper,
  BannerLeft,
  BannerRight,
  BannerControl
} from './style';

export default memo(function YDTopBanner() {
  // state
  const [currentIndex, setCurrentIndex] = useState(0)

  // 组件和redux关联： 获取数据和进行操作
  const { topBanners } = useSelector(state => ({
    // topBanners: state.get('recommend').get('topBanner')下面是语法糖
    topBanners: state.getIn(['recommend', 'topBanners'])
  }), shallowEqual)
  const dispatch = useDispatch()

  // 其他 hooks
  const bannerRef = useRef()
  useEffect(() => {
    dispatch(getTopBannerAction())
  }, [dispatch])
  const bannerChange = useCallback(current => {
    setCurrentIndex(current)
  }, [])

  // 其他业务逻辑
  const bgImage = topBanners[currentIndex] && (topBanners[currentIndex].imageUrl + '?imageView&blur=40x20')

  return (
    <BannerWrapper bgImage={bgImage}>
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel effect="fade" autoplay ref={bannerRef} afterChange={bannerChange}>
            {
              topBanners.map((item, index) => {
                return (
                  <div className="banner-item" key={item.imageUrl}>
                    <img className="image" src={item.imageUrl} alt="typeTitle"/>
                  </div>
                )
              })
            }
          </Carousel>
        </BannerLeft>
        <BannerRight></BannerRight>
        <BannerControl>
          <button className="btn left" onClick={e => bannerRef.current.prev()}></button>
          <button className="btn right" onClick={e => bannerRef.current.next()}></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  )
})
