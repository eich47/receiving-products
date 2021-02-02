import {DeliveryDateActionTypes, SET_DELIVERY_DATE} from './types'

export function setDeliveryData(deliveryDate: string): DeliveryDateActionTypes {
  return {
    type: SET_DELIVERY_DATE,
    payload: {
      deliveryDate,
    },
  }
}
