export const isFilledCardNumberSelector = (state) => {
  return state.payment.card !== null
}

export const isFilledPhoneSelector = (state) => {
  return state.payment.phone !== null
}
