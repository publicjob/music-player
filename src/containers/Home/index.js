import React, { useEffect } from 'react'
import HeaderLine from '../../common/components/HeaderLine'
import ListItem from '../../common/components/ListItem'
import Slider from '../../common/components/Slider'
import { HomeWrapper } from './style'
import { connect } from 'react-redux'
import * as HomeActionCreators from './store/actionCreators'

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
  const { bannerList, get_bannerList } = props
  useEffect(() => {
    get_bannerList()
  }, [])
  return (
    <HomeWrapper>
      <HeaderLine title="首页" shape="circle" />
      <Slider bannerList={bannerList}/>
      {listConfig.map((item, index) => (
        <ListItem to={item.to} title={item.title} icon={item.icon} key={index} />
      ))}
    </HomeWrapper>
  )
}

export default connect(state =>({
  bannerList: state.home.bannerList
}), HomeActionCreators)(Home)