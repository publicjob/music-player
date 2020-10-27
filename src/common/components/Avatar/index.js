import React from 'react'
import PropTypes from 'prop-types'
import { ImageWrapper, Image } from './style'

const Avatar = (props) => {
  const { shape, src } = props
  return (
    <ImageWrapper>
      <Image src={src} shape={shape}/>
    </ImageWrapper>
  )
}

//定义Avatar的参数类型检查
Avatar.propTypes = {
  shape: PropTypes.string,
  src: PropTypes.string
}

//定义Avatar的参数默认值
Avatar.defaultProps = {
  shape: 'square',
  src: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2400268875,668657237&fm=26&gp=0.jpg'
}

export default Avatar

