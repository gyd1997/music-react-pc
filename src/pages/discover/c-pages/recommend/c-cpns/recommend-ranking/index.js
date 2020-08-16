import React, { memo, useEffect } from 'react'
import { useDispatch, shallowEqual, useSelector } from "react-redux"

import YDThemeHeaderRCM from '@/components/theme-header-rcm'
import YDTopRanking from '@/components/top-ranking'
import { RankingWrapper } from './style'
import { getTopListAction } from "../../store/actionCreators"

export default memo(function YDRecommendRanking() {
  // redux hooks
  const dispatch = useDispatch()
  const { 
    upRanking,
    newRanking,
    originRanking
   } = useSelector(state =>({
    upRanking: state.getIn(['recommend', 'upRanking']),
    newRanking: state.getIn(['recommend', 'newRanking']),
    originRanking: state.getIn(['recommend', 'originRanking']),
  }), shallowEqual)

  // other hooks
  useEffect(() => {
    dispatch(getTopListAction(0))
    dispatch(getTopListAction(2))
    dispatch(getTopListAction(3))
  }, [dispatch])

  return (
    <RankingWrapper>
      <YDThemeHeaderRCM title="榜单"/>
      <div className="tops">
        <YDTopRanking info={upRanking}/>
        <YDTopRanking info={newRanking}/>
        <YDTopRanking info={originRanking}/>
      </div>
    </RankingWrapper>
  )
})
