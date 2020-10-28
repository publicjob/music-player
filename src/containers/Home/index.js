import React, { useEffect } from 'react'
import HeaderLine from '../../common/components/HeaderLine'
import ListItem from '../../common/components/ListItem'
import Slider from '../../common/components/Slider'
import { HomeWrapper } from './style'
import { connect } from 'react-redux'
import * as HomeActionCreators from './store/actionCreators'
import { Route } from 'react-router-dom'
import Song from './Song'

//配置列表项
const listConfig = [
  {
    title: '歌单列表',
    to: '',
    icon: 'gedan',
  },
  {
    title: '歌手列表',
    to: '',
    icon: 'renyuanliebiao',
  },
  {
    title: '视频列表',
    to: '',
    icon: 'album',
  },
  {
    title: '歌曲分类',
    to: '',
    icon: 'class',
  },
]

const Home = (props) => {
  const { bannerList, get_bannerList, go_song, go_singer, go_video, go_category } = props
  useEffect(() => {
    get_bannerList()
  }, [])
  const GO_WHERE = {
    '歌单列表': go_song,
    '歌手列表': go_singer,
    '视频列表': go_video,
    '歌曲分类': go_category
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
      {
        <Route path={'/song'} component={Song}/>
      }
    </HomeWrapper>
  )
}

export default connect(state => ({
  bannerList: state.home.bannerList
}), HomeActionCreators)(Home)