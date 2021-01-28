import {getCityData} from './selector.gateway'

export const CITY_RECEIVED = 'SELECTOR/CITY_RECEIVED'
export const GET_ADDRESS_BY_CITY = 'SELECTOR/GET_ADDRESS_BY_CITY'
export const SET_SELECTED_CITY = 'SELECTOR/SET_SELECTED_CITY'
export const SET_SELECTED_STREET_HOUSE = 'SELECTOR/SET_SELECTED_STREET_HOUSE'

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
