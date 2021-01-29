export const SET_PHONE = 'PAYMENT/SET_PHONE'
export const SET_CARD = 'PAYMENT/SET_CARD'

//установить телефон
export const setPhone = (phone) => {
  return {
    type: SET_PHONE,
    payload: {
      phone,
    },
  }
}

//установить номер карты
export const setCard = (card) => {
  return {
    type: SET_CARD,
    payload: {
      card,
    },
  }
}
