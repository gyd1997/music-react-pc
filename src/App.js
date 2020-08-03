import React, { memo } from 'react'
import { renderRoutes } from 'react-router-config'
import { HashRouter } from 'react-router-dom'

import routes from './router'

import YDAppHeader from 'components/app-header'
import YDAppFooter from 'components/app-footer'

export default memo(function App() {
  return (
    <HashRouter>
      <YDAppHeader/>
      {renderRoutes(routes)}
      <YDAppFooter/>
    </HashRouter>
  )
})
