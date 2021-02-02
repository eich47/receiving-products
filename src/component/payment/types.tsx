export interface PaymentState {
  phone: string | null
  card: string | null
}

export const SET_PHONE = 'PAYMENT/SET_PHONE'
export const SET_CARD = 'PAYMENT/SET_CARD'

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

export type PaymentActionTypes = ISetCardAction | ISetPhoneAction
