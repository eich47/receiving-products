import {
  CITY_RECEIVED,
  CLEAR_EXIST_ADDRESS_DATA,
  CLEAR_SELECTED_STREET_HOUSE,
  FETCH_ADDRESS_ERROR,
  FETCH_ADDRESS_START,
  FETCH_ADDRESS_SUCCESS,
  SelectorActionsType,
  SelectorState,
  SET_PICKUP_PAYMENT_TYPE,
  SET_SELECTED_CITY,
  SET_SELECTED_STREET_HOUSE,
} from './types'
import {PaymentType} from '../../shared/app_types'

const initialState: SelectorState = {
  addressData: [],
  selectedCity: null,
  selectedFullAddress: null, //город, улица, дом
  selectedPaymentType: PaymentType.CARD, // какой вариант оплаты выбрал пользователь (наличные/карта), карта по умолчанию
  isLoading: false,
  error: null,
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
    case CLEAR_SELECTED_STREET_HOUSE: {
      return {
        ...state,
        selectedFullAddress: null,
      }
    }
    case FETCH_ADDRESS_START: {
      return {
        ...state,
        isLoading: true,
      }
    }
    case FETCH_ADDRESS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
      }
    }
    case FETCH_ADDRESS_ERROR: {
      return {
        ...state,
        isLoading: false,
        error: action.error,
      }
    }
    default:
      return state
  }
}

export default selectorReducer
