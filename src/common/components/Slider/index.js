import React from 'react'
import PropTypes from 'prop-types'
import SwiperCore, { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
import './style.css'

// install Swiper components
SwiperCore.use([Pagination, Autoplay]);

const Slider = (props) => {
  const { bannerList } = props
  const slides = []
  for (let i = 0; i < bannerList.length; i++) {
    slides.push(<SwiperSlide key={`slide-${i}`} tag="li">
      <img src={`https://picsum.photos/id/${i + 1}/500/300`} alt={`Slide-${i}`} />
    </SwiperSlide>)
  }
  return (
    <Swiper
      tag="section"
      wrapperTag="ul"
      pagination
      autoplay
      loop
      onSlideChange={(swiper) => {
        console.log(swiper.activeIndex)
      }}
    >
      {slides}
    </Swiper>
  )
}

//定义Slider的参数检查
Slider.propTypes = {
  bannerList: PropTypes.array
}

//定义Slider的参数默认值
Slider.defaultProps = {
  bannerList: [
    'https://picsum.photos/id/1/500/300',
    'https://picsum.photos/id/2/500/300',
    'https://picsum.photos/id/3/500/300',
    'https://picsum.photos/id/4/500/300',
    'https://picsum.photos/id/5/500/300',
  ]
}

export default Slider
