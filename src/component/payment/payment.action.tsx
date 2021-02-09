//установить телефон
import {
  CLEAN_CARD,
  CLEAN_PHONE,
  PaymentActionTypes,
  SET_CARD,
  SET_PHONE,
} from './types'

export function setPhone(phone: string): PaymentActionTypes {
  return {
    type: SET_PHONE,
    payload: {
      phone,
    },
  }
}

//установить номер карты
export function setCard(card: string): PaymentActionTypes {
  return {
    type: SET_CARD,
    payload: {
      card,
    },
  }
}

export function cleanCard(): PaymentActionTypes {
  return {
    type: CLEAN_CARD,
  }
}

export function cleanPhone(): PaymentActionTypes {
  return {
    type: CLEAN_PHONE,
  }
}
