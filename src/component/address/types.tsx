export interface IAddressState {
  address: string
}

export const SET_ADDRESS = 'ADDRESS/SET_ADDRESS'

interface ISetAddress {
  type: typeof SET_ADDRESS
  payload: {
    address: string
  }
}

export type AddressActionTypes = ISetAddress
