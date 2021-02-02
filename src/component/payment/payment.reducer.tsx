import {PaymentActionTypes, PaymentState, SET_CARD, SET_PHONE} from './types'
const initialState: PaymentState = {
  phone: null,
  card: null,
}

const paymentReducer = (
  state = initialState,
  action: PaymentActionTypes
): PaymentState => {
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
