//получуть все годода в которых есть доставка
export const citySelector = (state) => {
  const city = state.selector.addressData.map((data) => {
    return data.city
  })
  const citiesWithoutDuplicate = [...new Set(city)]
  return citiesWithoutDuplicate
}

//выбрать адресса относящиеся к выбранному городу
export const selectAddressByCity = (state) => {
  const {selectedCity, addressData} = state.selector

  if (selectedCity === null) {
    console.log('selectedCity === null')
    return null
  }

  return addressData.filter((loc) => {
    return loc.city === selectedCity
  })
}

//выбран ли адресс
export const isSelectAddressSelector = (state) => {
  return state.selector.selectedFullAddress !== null
}

//способ оплаты
export const selectedPaymentSelector = (state) => {
  return state.selector.selectedPaymentType
}

//получить выбранный год
export const getSelectedCitySelector = (state) => {
  return state.selector.selectedCity
}
//получить выбранный адресс (улицу и дом)
export const getFullAddressSelector = (state) => {
  return state.selector.selectedFullAddress !== null
    ? state.selector.selectedFullAddress[0]
    : {}
}
