import React from 'react'
import PropTypes from 'prop-types'
import './iconfont.css'
import { ListItemWrapper, Icon, Title, Arrow,TitleWrapper } from './style'
import { NavLink } from 'react-router-dom'

const ListItem = (props) => {
  const { icon, title, to } = props
  return (
    <ListItemWrapper>
      <TitleWrapper>
      <Icon className={`iconfont icon-${icon}`}></Icon>
      <Title>{title}</Title>
      </TitleWrapper>
      <NavLink to={to}>
        <Arrow className="iconfont icon-youjiantou"></Arrow>
      </NavLink>
    </ListItemWrapper>
  )
}

//定义ListItem的参数检查
ListItem.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  to: PropTypes.string,
}

//定义ListItem的默认参数
ListItem.defaultProps = {
  icon: 'gedan',
  title: '歌单列表',
  to: ''
}

export default ListItem