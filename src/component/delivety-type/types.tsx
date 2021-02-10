export interface IDeliveryTypeState {
  deliveryType: DeliveryType
}

//способы получения товара
export enum DeliveryType {
  PICKUP = 'pickup', //самовывоз
  HUMAN_DELIVERY = 'human-delivery', //доставка курьером
}

export const SET_DELIVERY_TYPE = 'DELIVERY_TYPE/SET_DELIVERY_TYPE'

interface ISetDeliveryType {
  type: typeof SET_DELIVERY_TYPE
  payload: {
    deliveryType: DeliveryType
  }
}

export type DeliveryTypeActionTypes = ISetDeliveryType
