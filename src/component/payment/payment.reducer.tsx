import {
  CLEAN_CARD,
  CLEAN_PHONE,
  PaymentActionTypes,
  PaymentState,
  SET_CARD,
  SET_PHONE,
} from './types'

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
    case CLEAN_CARD:
      return {
        ...state,
        card: null,
      }
    case CLEAN_PHONE:
      return {
        ...state,
        phone: null,
      }
    default:
      return state
  }
}

export default paymentReducer
