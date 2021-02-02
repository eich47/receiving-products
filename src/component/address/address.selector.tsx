import {RootState} from '../../store'

export const selectTypedAddressSelector = (state: RootState) => {
  return state.address.address
}
