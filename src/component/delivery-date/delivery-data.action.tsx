export const SET_DELIVERY_DATA = 'DELIVERY_DATA/SET_DELIVERY_DATA'

export const setDeliveryData = (date) => {
  return {
    type: SET_DELIVERY_DATA,
    payload: {
      date,
    },
  }
}
