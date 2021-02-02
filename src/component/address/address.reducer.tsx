import {AddressActionTypes, IAddressState, SET_ADDRESS} from './types'

const initialState: IAddressState = {
  address: ``,
}
const addressReducer = (
  state = initialState,
  action: AddressActionTypes
): IAddressState => {
  switch (action.type) {
    case SET_ADDRESS: {
      return {
        ...state,
        address: action.payload.address,
      }
    }
    default:
      return state
  }
}

export default addressReducer
