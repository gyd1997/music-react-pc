import React, { memo, Suspense } from 'react'
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config'
import { HashRouter } from 'react-router-dom'

import store from './store';
import routes from './router'

import YDAppHeader from 'components/app-header'
import YDAppFooter from 'components/app-footer'
import YDAppPlayerBar from './pages/player/app-player-bar'

export default memo(function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <YDAppHeader/>
          <Suspense fallback={<div>loading</div>}>
            {renderRoutes(routes)}
          </Suspense>
        <YDAppFooter/>
        <YDAppPlayerBar/>
      </HashRouter>
    </Provider>
    
  )
})
