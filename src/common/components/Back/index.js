import React from 'react'
import PropTypes from 'prop-types'
import './iconfont.css'
import { BackWrapper, Arrow, Title } from './style'

const Back = (props) => {
  const { onBack, children } = props
  return (
    <BackWrapper onClick={onBack}>
      <Arrow className="iconfont icon-arrowcrudeleft"></Arrow>
      <Title>{children}</Title>
    </BackWrapper>
  )
}

//定义Back组件的参数类型检查
Back.propTypes = {
  onBack: PropTypes.func
}

//定义Back组件的默认参数
Back.defautlProps = {
  onBack: e => e
}

export default Back