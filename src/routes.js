import {lazy} from 'react'


const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: lazy(()=>import('./pages/home/home/home')),
    children: [
      {
        path: '/home/detail/:slug/:id',
        component: lazy(()=>import('./pages/home/detail/detail')),
      }
    ]
  },
  {
    path: '/attention',
    component: lazy(()=>import('./pages/attention/attention/attention')),
  },
  {
    path: '/mine',
    component: lazy(()=>import('./pages/mine/mine/mine')),
    children: [
      {
        path: '/mine/collect',
        component: lazy(()=>import('./pages/mine/collect/collect')),
      }
    ]
  }
]

export default routes;