import {getCityData} from './selector.gateway'

export const CITY_RECEIVED = 'SELECTOR/CITY_RECEIVED'
export const SET_SELECTED_CITY = 'SELECTOR/SET_SELECTED_CITY'
export const SET_SELECTED_STREET_HOUSE = 'SELECTOR/SET_SELECTED_STREET_HOUSE'
export const SET_PICKUP_PAYMENT_TYPE = 'SELECTOR/SET_PICKUP_PAYMENT_TYPE'

//помесить города в стор
export const cityReceived = (cityData) => {
  return {
    type: CITY_RECEIVED,
    payload: {
      addressData: cityData,
    },
  }
}

//получить города
export const fetchCityData = () => {
  return function (dispatch, getState) {
    const {selectedCity} = getState().selector
    getCityData().then((cityData) => {
      dispatch(cityReceived(cityData))
      dispatch(setSelectedCity(selectedCity))
    })
  }
}

//задать город для которого будут выводиться адреса
export const setSelectedCity = (city) => {
  return {
    type: SET_SELECTED_CITY,
    payload: {
      city,
    },
  }
}

//установить выбраный адресс (улица и дом)
export const setSelectedStreetHouse = (addressId) => {
  return {
    type: SET_SELECTED_STREET_HOUSE,
    payload: {
      addressId,
    },
  }
}

//установить вариант оплаты для самовывозе (карта/наличные)
export const setPickUpPaymentType = (paymentType) => {
  return {
    type: SET_PICKUP_PAYMENT_TYPE,
    payload: {
      paymentType,
    },
  }
}
