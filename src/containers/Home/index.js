import React, { useEffect } from 'react'
import HeaderLine from '../../common/components/HeaderLine'
import ListItem from '../../common/components/ListItem'
import Slider from '../../common/components/Slider'
import { HomeWrapper } from './style'
import { connect } from 'react-redux'
import * as HomeActionCreators from './store/actionCreators'
import { Route } from 'react-router-dom'
import Song from '../Song'
import Singer from '../Singer'
import Video from '../Video'
import Album from '../Album'

//配置列表项
const listConfig = [
  {
    title: '歌单列表',
    icon: 'gedan',
  },
  {
    title: '歌手列表',
    icon: 'renyuanliebiao',
  },
  {
    title: '视频列表',
    icon: 'album',
  },
  {
    title: '专辑列表',
    icon: 'class',
  },
]

// const routeConfig = [
//   {
//     path: '/song',
//     component: Song,
//   },
//   {
//     path: '/siner',
//     component: Singer,
//   },
//   {
//     path: '/video',
//     component: Video,
//   },
//   {
//     path: '/album',
//     component: Album,
//   }
// ]
const Home = (props) => {
  const { bannerList, get_bannerList, go_song, go_singer, go_video, go_album } = props
  useEffect(() => {
    get_bannerList()
  }, [])
  const GO_WHERE = {
    '歌单列表': go_song,
    '歌手列表': go_singer,
    '视频列表': go_video,
    '专辑列表': go_album
  }
  const handleListItemClick = (event, title) => {
    event.stopPropagation();
    GO_WHERE[title]()
  }
  return (
    <HomeWrapper>
      <HeaderLine title="首页" shape="circle" />
      <Slider bannerList={bannerList} />
      {listConfig.map((item, index) => (
        <ListItem title={item.title} icon={item.icon} key={index} onClick={(e) => handleListItemClick(e, item.title)} />
      ))}
      {/* {
        routeConfig.map((route, index) => ( <Route path={route.path} component={route.component} key={index}/>))
      } */}
    </HomeWrapper>
  )
}

export default connect(state => ({
  bannerList: state.home.bannerList
}), HomeActionCreators)(Home)