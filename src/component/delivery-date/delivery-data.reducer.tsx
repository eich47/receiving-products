import {
  DeliveryDateActionTypes,
  IDeliveryDateState,
  SET_DELIVERY_DATE,
} from './types'

const initState: IDeliveryDateState = {
  deliveryDate: null,
}

const deliverDataReducer = (
  state = initState,
  action: DeliveryDateActionTypes
): IDeliveryDateState => {
  switch (action.type) {
    case SET_DELIVERY_DATE: {
      return {
        ...state,
        deliveryDate: action.payload.deliveryDate,
      }
    }
    default:
      return state
  }
}
export default deliverDataReducer
