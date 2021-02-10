import {
  DeliveryType,
  DeliveryTypeActionTypes,
  IDeliveryTypeState,
  SET_DELIVERY_TYPE,
} from './types'

const initialState: IDeliveryTypeState = {
  deliveryType: DeliveryType.PICKUP,
}

const deliveryTypeReducer = (
  state = initialState,
  action: DeliveryTypeActionTypes
): IDeliveryTypeState => {
  switch (action.type) {
    case SET_DELIVERY_TYPE:
      return {
        ...state,
        deliveryType: action.payload.deliveryType,
      }
    default:
      return state
  }
}

export default deliveryTypeReducer
