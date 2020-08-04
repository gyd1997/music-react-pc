import React, { memo } from 'react'
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config'
import { HashRouter } from 'react-router-dom'

import store from './store';
import routes from './router'

import YDAppHeader from 'components/app-header'
import YDAppFooter from 'components/app-footer'

export default memo(function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <YDAppHeader/>
          {renderRoutes(routes)}
        <YDAppFooter/>
      </HashRouter>
    </Provider>
    
  )
})
