// const mapping = {
//   id: 'number',
//   city: 'string',
//   address: {
//     city: {
//       street: 'string',
//       house: 'number',
//     },
//   },
// }
import {DataApi, LocalData} from '../../../shared/app_types'

export const mappingAddress = (dataApi: Array<DataApi>) => {
  const result: Array<LocalData> = []
  dataApi.forEach((item) => {
    const address: LocalData = {
      id: item.id,
      city: item.city,
      address: {
        city: {
          street: item.street,
          house: item.house,
        },
      },
    }
    result.push(address)
  })
  return result
}
