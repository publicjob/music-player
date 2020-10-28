import HOME_URL from './config'
import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:3000'
})

//发送请求获取轮播图
export const get_bannerList_request = () => {
  return new Promise((resolve, reject) => {
    instance.get(HOME_URL.BANNER)
      .then(res => resolve(res))
      .catch(err => reject(err))
  })
}

//获取歌单列表
export const get_musicList_request = () => {
  return new Promise((resolve, reject) => {
    instance.get(HOME_URL.MUSICLIST)
    .then(res => resolve(res))
    .catch(err => reject(err))
  })
}
