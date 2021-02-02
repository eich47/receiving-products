import {LocalData, PaymentType} from '../../shared/app_types'

//state для компонента Selector
export interface SelectorState {
  addressData: LocalData[]
  selectedCity: string | null
  selectedFullAddress: LocalData | null //город, улица, дом
  selectedPaymentType: PaymentType // какой вариант оплаты выбрал пользователь (наличные/карта)
}

export const CITY_RECEIVED = 'SELECTOR/CITY_RECEIVED'
export const SET_SELECTED_CITY = 'SELECTOR/SET_SELECTED_CITY'
export const SET_SELECTED_STREET_HOUSE = 'SELECTOR/SET_SELECTED_STREET_HOUSE'
export const SET_PICKUP_PAYMENT_TYPE = 'SELECTOR/SET_PICKUP_PAYMENT_TYPE'
export const CLEAR_EXIST_ADDRESS_DATA = 'SELECTOR/CLEAR_EXIST_ADDRESS_DATA'

interface CityReceivedAction {
  type: typeof CITY_RECEIVED
  payload: {
    addressData: Array<LocalData>
  }
}

interface setSelectedCityAction {
  type: typeof SET_SELECTED_CITY
  payload: {
    city: string | null
  }
}

interface setSelectedStreetHouse {
  type: typeof SET_SELECTED_STREET_HOUSE
  payload: {
    addressId: number
  }
}

interface setPickupPaymentType {
  type: typeof SET_PICKUP_PAYMENT_TYPE
  payload: {
    paymentType: PaymentType
  }
}

interface clearExistAddressData {
  type: typeof CLEAR_EXIST_ADDRESS_DATA
}

export type SelectorActionsType =
  | CityReceivedAction
  | setSelectedCityAction
  | setSelectedStreetHouse
  | setPickupPaymentType
  | clearExistAddressData
