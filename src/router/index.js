import YDDiscover from '@/pages/discover'
import YDMine from '@/pages/mine'
import YDFriend from '@/pages/friend'

const routes = [
  {
    path: '/',
    exact: true,
    component: YDDiscover
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