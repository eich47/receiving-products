export const SET_ADDRESS = 'ADDRESS/SET_ADDRESS'

export const setAddress = (address) => {
  return {
    type: SET_ADDRESS,
    payload: {
      address,
    },
  }
}
