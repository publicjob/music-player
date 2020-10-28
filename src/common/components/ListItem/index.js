import React from 'react'
import PropTypes from 'prop-types'
import './iconfont.css'
import { ListItemWrapper, Icon, Title, Arrow,TitleWrapper } from './style'

const ListItem = (props) => {
  const { icon, title, onClick } = props
  return (
    <ListItemWrapper onClick={onClick}>
      <TitleWrapper>
      <Icon className={`iconfont icon-${icon}`}></Icon>
      <Title>{title}</Title>
      </TitleWrapper>
      <Arrow className="iconfont icon-youjiantou"></Arrow>
    </ListItemWrapper>
  )
}

//定义ListItem的参数检查
ListItem.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  onClick: PropTypes.func
}

//定义ListItem的默认参数
ListItem.defaultProps = {
  icon: 'gedan',
  title: '歌单列表',
  onClick: e => e
}

export default ListItem