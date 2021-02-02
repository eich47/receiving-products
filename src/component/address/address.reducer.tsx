import {SET_ADDRESS} from './address.action'

const initialState = {
  address: ``,
}
const addressReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ADDRESS: {
      return {
        ...state,
        address: action.payload.address,
      }
    }
    default:
      return state
  }
}

export default addressReducer
