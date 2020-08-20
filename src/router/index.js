import React from 'react';

import YDDiscover from '@/pages/discover'
import YDRecommend from "../pages/discover/c-pages/recommend";
import YDRanking from "../pages/discover/c-pages/ranking";
import YDSongs from "../pages/discover/c-pages/songs";
import YDDjradio from "../pages/discover/c-pages/djradio";
import YDArtist from "../pages/discover/c-pages/artist";
import YDAlbum from "../pages/discover/c-pages/album";
import YDPlayer from '../pages/player';

import YDMine from '@/pages/mine'
import YDFriend from '@/pages/friend'
import { Redirect } from 'react-router-dom'

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