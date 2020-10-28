import { get_bannerList_request } from '../api'
import * as types from './constants'

export const set_bannerList = (bannerList) => {
  return {
    type: types.SET_BANNERLIST,
    payload: bannerList
  }
}

export const get_bannerList = () => {
  return async (dispatch) => {
    const { data: response } = await get_bannerList_request()
    if(response.code === 200) dispatch(set_bannerList(response.banners))  
  }
}

