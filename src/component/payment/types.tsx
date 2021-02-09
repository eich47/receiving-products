export interface PaymentState {
  phone: string | null
  card: string | null
}

export const SET_PHONE = 'PAYMENT/SET_PHONE'
export const SET_CARD = 'PAYMENT/SET_CARD'
export const CLEAN_PHONE = 'PAYMENT/CLEAN_PHONE'
export const CLEAN_CARD = 'PAYMENT/CLEAN_CARD'

interface ISetPhoneAction {
  type: typeof SET_PHONE
  payload: {
    phone: string
  }
}

interface ISetCardAction {
  type: typeof SET_CARD
  payload: {
    card: string
  }
}

interface ICleanPhone {
  type: typeof CLEAN_PHONE
}
interface ICleanCard {
  type: typeof CLEAN_CARD
}

export type PaymentActionTypes =
  | ISetCardAction
  | ISetPhoneAction
  | ICleanPhone
  | ICleanCard
