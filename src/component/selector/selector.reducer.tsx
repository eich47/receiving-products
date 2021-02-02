import {
  CITY_RECEIVED,
  CLEAR_EXIST_ADDRESS_DATA,
  SET_PICKUP_PAYMENT_TYPE,
  SET_SELECTED_CITY,
  SET_SELECTED_STREET_HOUSE,
  SelectorState,
  SelectorActionsType,
} from './types'

const initialState: SelectorState = {
  addressData: [],
  selectedCity: null,
  selectedFullAddress: null, //город, улица, дом
  selectedPaymentType: 'card', // какой вариант оплаты выбрал пользователь (наличные/карта), карта по умолчанию
}

const selectorReducer = (
  state = initialState,
  action: SelectorActionsType
): SelectorState => {
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
      const [newSelectedStreetHouse] = addressData.filter((address) => {
        if (address.id === locationId) {
          return address
        } else {
          return false
        }
      })
      //todo переделать логику, видно лушче отдельных экшен сделать
      let fullAddress = newSelectedStreetHouse
      // if (fullAddress.length === 0) {
      //   fullAddress = null
      // }
      return {
        ...state,
        selectedFullAddress: fullAddress,
      }
    }

    case SET_PICKUP_PAYMENT_TYPE: {
      return {
        ...state,
        selectedPaymentType: action.payload.paymentType,
      }
    }

    case CLEAR_EXIST_ADDRESS_DATA: {
      return {
        ...state,
        addressData: [],
      }
    }

    default:
      return state
  }
}

export default selectorReducer
