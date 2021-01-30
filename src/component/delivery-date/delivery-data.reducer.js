import {SET_DELIVERY_DATA} from './delivery-data.action'

const initState = {
  deliveryDate: null,
}

const deliverDataReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_DELIVERY_DATA: {
      return {
        ...state,
        deliveryDate: action.payload.date,
      }
    }
    default:
      return state
  }
}
export default deliverDataReducer
