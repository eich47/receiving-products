import {RootState} from '../../store'

export const isFilledCardNumberSelector = (state: RootState) => {
  return state.payment.card !== null
}

export const isFilledPhoneSelector = (state: RootState) => {
  return state.payment.phone !== null
}
