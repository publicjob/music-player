import { get_bannerList_request } from '../api'
import * as types from './constants'
import { push } from 'connected-react-router'

export const set_bannerList = (bannerList) => {
  return {
    type: types.SET_BANNERLIST,
    payload: bannerList
  }
}

export const go_song = () => {
  return push('/song')
}

export const go_singer = () => {
  return push('/singer')
}

export const go_video = () => {
  return push('/video')
}

export const go_album = () => {
  return push('/album')
}

export const get_bannerList = () => {
  return async (dispatch) => {
    const { data: response } = await get_bannerList_request()
    if(response.code === 200) dispatch(set_bannerList(response.banners))  
  }
}

