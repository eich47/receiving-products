import {DeliveryType, DeliveryTypeActionTypes, SET_DELIVERY_TYPE} from './types'

export function setDeliveryType(
  deliveryType: DeliveryType
): DeliveryTypeActionTypes {
  return {
    type: SET_DELIVERY_TYPE,
    payload: {
      deliveryType,
    },
  }
}
