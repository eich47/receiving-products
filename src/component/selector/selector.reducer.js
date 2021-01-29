import {
  CITY_RECEIVED,
  SET_PICKUP_PAYMENT_TYPE,
  SET_SELECTED_CITY,
  SET_SELECTED_STREET_HOUSE,
} from './selector.action'

const initialData = {
  addressData: [],
  selectedCity: null,
  selectedFullAddress: null, //город, улица, дом
  selectedPaymentType: 'card', // какой вариант оплаты выбрал пользователь (наличные/карта), карта по умолчанию
}

const selectorReducer = (state = initialData, action) => {
  switch (action.type) {
    case CITY_RECEIVED: {
      return {
        ...state,
        addressData: state.addressData.concat(action.payload.addressData),
      }
    }
    case SET_SELECTED_CITY: {
      const newSelectedCity =
        state.selectedCity === null
          ? state.addressData[0]
            ? state.addressData[0].city
            : null
          : action.payload.city

      return {
        ...state,
        selectedCity: newSelectedCity,
      }
    }
    case SET_SELECTED_STREET_HOUSE: {
      const locationId = action.payload.addressId
      const {addressData} = state
      const newSelectedStreetHouse = addressData.filter((address) => {
        if (address.id === locationId) {
          return address
        } else {
          return false
        }
      })
      return {
        ...state,
        selectedFullAddress: newSelectedStreetHouse,
      }
    }

    case SET_PICKUP_PAYMENT_TYPE: {
      return {
        ...state,
        selectedPaymentType: action.payload.paymentType,
      }
    }

    default:
      return state
  }
}

export default selectorReducer
