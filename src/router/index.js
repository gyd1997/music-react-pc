import React from 'react';

import { Redirect } from 'react-router-dom'

const YDDiscover = React.lazy(() => import('@/pages/discover'))
const YDRecommend = React.lazy(() => import("../pages/discover/c-pages/recommend"))
const YDSongs  = React.lazy(() => import("../pages/discover/c-pages/songs"))
const YDDjradio  = React.lazy(() => import("../pages/discover/c-pages/djradio"))
const YDRanking  = React.lazy(() => import("../pages/discover/c-pages/ranking"))
const YDArtist  = React.lazy(() => import("../pages/discover/c-pages/artist"))
const YDAlbum  = React.lazy(() => import("../pages/discover/c-pages/album"))
const YDPlayer  = React.lazy(() => import('../pages/player'))
const YDMine  = React.lazy(() => import('@/pages/mine'))
const YDFriend  = React.lazy(() => import('@/pages/friend'))


const routes = [
  {
    path: '/',
    exact: true,
    render: () => {
      return <Redirect to="/discover"/>
    }
  },
  {
    path: '/discover',
    component: YDDiscover,
    routes: [
      {
        path: '/discover',
        exact: true,
        render: () => (
          <Redirect to="/discover/recommend"/>
        )
      },
      {
        path: '/discover/recommend',
        component: YDRecommend
      },
      {
        path: '/discover/ranking',
        component: YDRanking
      },
      {
        path: '/discover/songs',
        component: YDSongs
      },
      {
        path: '/discover/album',
        component: YDAlbum
      },
      {
        path: '/discover/artist',
        component: YDArtist
      },
      {
        path: '/discover/djradio',
        component: YDDjradio
      },
      {
        path: '/discover/player',
        component: YDPlayer
      }
    ]
  },
  {
    path: '/mine',
    component: YDMine
  },
  {
    path: '/friend',
    component: YDFriend
  }
]

export default routes