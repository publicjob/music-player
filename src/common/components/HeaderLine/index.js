import React from 'react'
import PropTypes from 'prop-types'
import Avatar from '../Avatar'
import { HeaderWrapper, Title } from './style'
import { NavLink } from 'react-router-dom'

const HeaderLine = (props) => {
  const { title, src, shape, to } = props
  return (
    <HeaderWrapper>
      <Title>{title}</Title>
      <NavLink to={to}>
        <Avatar src={src} shape={shape} />
      </NavLink>
    </HeaderWrapper>
  )
}

//定义HeaderLine的参数检查
HeaderLine.propTypes = {
  title: PropTypes.string,
  src: PropTypes.string,
  shape: PropTypes.string,
  to: PropTypes.string
}

//定义HeaderLine的默认值
HeaderLine.defaultProps = {
  title: '标题',
  src: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2857175025,2520622403&fm=26&gp=0.jpg',
  shape: 'square',
  to: '/user'
}
export default HeaderLine