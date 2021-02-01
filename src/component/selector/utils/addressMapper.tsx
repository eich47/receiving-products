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
export const mappingAddress = (dataApi) => {
  const result = []
  dataApi.forEach((item) => {
    const address = {
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
