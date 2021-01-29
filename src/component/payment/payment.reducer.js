import {SET_CARD, SET_PHONE} from './payment.action'

const initialState = {
  phone: null,
  card: null,
}

const paymentReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PHONE: {
      return {
        ...state,
        phone: action.payload.phone,
      }
    }
    case SET_CARD: {
      return {
        ...state,
        card: action.payload.card,
      }
    }
    default:
      return state
  }
}

export default paymentReducer
