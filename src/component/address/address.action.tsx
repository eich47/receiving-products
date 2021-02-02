import {AddressActionTypes, SET_ADDRESS} from './types'

export function setAddress(address: string): AddressActionTypes {
  return {
    type: SET_ADDRESS,
    payload: {
      address,
    },
  }
}
