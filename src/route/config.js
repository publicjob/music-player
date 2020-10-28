import Home from '../containers/Home'
import Hot from '../containers/Hot'
import Search from '../containers/Search'
import Radio from '../containers/Radio'
import User from '../containers/User'
import Song from '../containers/Home/Song'
import Singer from '../containers/Home/Singer'
import Video from '../containers/Home/Video'
import Category from '../containers/Home/Category'

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/hot',
    component: Hot
  },
  {
    path: '/search',
    component: Search
  },
  {
    path: '/radio',
    component: Radio
  },
  {
    path: '/user',
    component: User
  },
  {
    path: '/song',
    component: Song
  },
  {
    path: '/singer',
    component: Singer
  },
  {
    path: '/video',
    component: Video
  },
  {
    path: '/category',
    component: Category
  }
]

const tabItems = [
  {
    to: '/home',
    icon: 'home',
    title: '首页',
    children : [
      {

      }
    ]
  },
  {
    to: '/hot',
    icon: 'hot',
    title: '热门'
  },
  {
    to: '/search',
    icon: 'search',
    title: '搜索'
  },
  {
    to: '/radio',
    icon: 'radio',
    title: '电台'
  },
  {
    to: '/user',
    icon: 'user',
    title: '我的'
  }
]
export {
  routes,
  tabItems
} 