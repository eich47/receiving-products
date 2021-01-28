import {mappingAddress} from './utils/addressMapper'

const addressData = [
  {
    id: 1,
    city: 'Минск',
    street: 'тест улица 1',
    house: '11',
  },
  {
    id: 2,
    city: 'Минск',
    street: 'тест улица 2',
    house: 22,
  },
  {
    id: 3,
    city: 'Гродно',
    street: 'тест улица 10',
    house: 101,
  },
  {
    id: 4,
    city: 'Гродно',
    street: 'тест улица 11',
    house: 101,
  },
]

export const getCityData = () => {
  return Promise.resolve(addressData).then((apiData) => {
    return mappingAddress(apiData)
  })
}
