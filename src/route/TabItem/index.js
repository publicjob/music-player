import React from 'react'
import PropTypes from 'prop-types'
import { TabItemWrapper, IconWrapper, TitleWrapper } from './style'
import './iconfonts.css'

const TabItem = (props) => {
  const { to, icon, title } = props
  return (
    <TabItemWrapper to={to} activeClassName="selected">
      <IconWrapper className={`iconfont icon-${icon}`}>
      </IconWrapper>
      <TitleWrapper>{title}</TitleWrapper>
    </TabItemWrapper>
  )
}

//定义接口类型检查
TabItem.propTypes = {
  to: PropTypes.string,
  icon: PropTypes.string,
  title: PropTypes.string
}

//定义接口默认值
TabItem.defaultProps = {
  to: '/home',
  icon: 'home',
  title: '首页'
}
export default TabItem