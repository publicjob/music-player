import * as types from './constants'
//定义初始态
const initState = {
  bannerList: []
}

const HomeReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case types.SET_BANNERLIST: {
      const newState = {
        ...state,
        bannerList: payload
      }
      return newState
    }
    default: return state
  }
}

//定义设置banner的reducer
export default HomeReducer

