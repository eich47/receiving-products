export interface IDeliveryDateState {
  deliveryDate: string | null
}

export const SET_DELIVERY_DATE = 'DELIVERY_DATA/SET_DELIVERY_DATA'

interface ISetDeliveryDate {
  type: typeof SET_DELIVERY_DATE
  payload: {
    deliveryDate: string
  }
}

export type DeliveryDateActionTypes = ISetDeliveryDate
