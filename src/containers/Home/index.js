import React from 'react'
import HeaderLine from '../../common/components/HeaderLine'
import ListItem from '../../common/components/ListItem'

//配置列表项
const listConfig = [
  {
    title:'歌单列表', 
    to: '',
    icon:'gedan', 
  },
  {
    title:'歌手列表', 
    to: '',
    icon:'renyuanliebiao', 
  },
  {
    title:'视频列表', 
    to: '',
    icon:'album', 
  },
  {
    title:'歌曲分类', 
    to: '',
    icon:'class', 
  },
]

const Home = () => {
  return (<div>
    <HeaderLine title="首页" shape="circle"/>
    {listConfig.map((item, index) => (
      <ListItem to={item.to} title={item.title} icon={item.icon} key={index}/>
    ))}
  </div>)
}

export default Home