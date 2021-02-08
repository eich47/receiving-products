import {getCityData} from './selector.gateway'
import {LocalData, PaymentType} from '../../shared/app_types'
import {
  CITY_RECEIVED,
  CLEAR_EXIST_ADDRESS_DATA,
  CLEAR_SELECTED_STREET_HOUSE,
  FETCH_ADDRESS_ERROR,
  FETCH_ADDRESS_START,
  FETCH_ADDRESS_SUCCESS,
  SelectorActionsType,
  SET_PICKUP_PAYMENT_TYPE,
  SET_SELECTED_CITY,
  SET_SELECTED_STREET_HOUSE,
} from './types'
import {ThunkAction} from 'redux-thunk'
import {Action} from 'redux'
import {RootState} from '../../store'

//помесить города в стор
export function cityReceived(cityData: Array<LocalData>): SelectorActionsType {
  return {
    type: CITY_RECEIVED,
    payload: {
      addressData: cityData,
    },
  }
}

//получить города
export const fetchCityDataAsync = (): ThunkAction<
  void,
  RootState,
  unknown,
  Action<string>
> => {
  return function (dispatch, getState) {
    dispatch(fetchAddressStart())
    const {selectedCity} = getState().selector
    getCityData()
      .then((cityData) => {
        dispatch(fetchAddressSuccess())
        dispatch(clearExistAddressData())
        dispatch(cityReceived(cityData))
        dispatch(setSelectedCity(selectedCity))
      })
      .catch((e) => {
        console.log('Error ', e)
        dispatch(fetchAddressError(e))
      })
  }
}

//задать город для которого будут выводиться адреса
export function setSelectedCity(city: string | null): SelectorActionsType {
  return {
    type: SET_SELECTED_CITY,
    payload: {
      city,
    },
  }
}

//установить выбраный адресс (улица и дом)
export function setSelectedStreetHouse(addressId: number): SelectorActionsType {
  return {
    type: SET_SELECTED_STREET_HOUSE,
    payload: {
      addressId,
    },
  }
}

//установить вариант оплаты для самовывозе (карта/наличные)
export function setPickUpPaymentType(
  paymentType: PaymentType
): SelectorActionsType {
  return {
    type: SET_PICKUP_PAYMENT_TYPE,
    payload: {
      paymentType,
    },
  }
}

//удалим существующие данные
export function clearExistAddressData(): SelectorActionsType {
  return {
    type: CLEAR_EXIST_ADDRESS_DATA,
  }
}

//удалим выбранный ранее адресс(улицу и дом)
export function clearSelectedStreetHouse(): SelectorActionsType {
  return {
    type: CLEAR_SELECTED_STREET_HOUSE,
  }
}

export function fetchAddressStart(): SelectorActionsType {
  return {
    type: FETCH_ADDRESS_START,
  }
}

export function fetchAddressSuccess(): SelectorActionsType {
  return {
    type: FETCH_ADDRESS_SUCCESS,
  }
}

export function fetchAddressError(e: any): SelectorActionsType {
  return {
    type: FETCH_ADDRESS_ERROR,
    error: e,
  }
}
