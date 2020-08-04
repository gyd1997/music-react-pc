import React, { memo, useEffect } from 'react'

import request from '@/services/request';

export default memo(function YDRecommend() {
  useEffect(() => {
    request({
      url: '/banner'
    }).then(res => {
      console.log(res)
    }, [])
  })
  return (
    <div>
      <h2>YDRecommend</h2>
    </div>
  )
})
