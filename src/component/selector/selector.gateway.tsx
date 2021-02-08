import {DataApi, LocalData} from '../../shared/app_types'
import axios from '../../shared/axios-selector'

const addressData = [
  {
    id: 1,
    city: 'Минск',
    street: 'тест улица 1',
    house: 11,
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
  //получим тестовые данные
  return new TestData(new RequestRealDataApi(), new TestMapper()).getData()
}

//получить адресса для приложения
interface IGetAddressDataApi {
  getAddressList(): any
}

//получить тестовые данные
class RequestTestDataApi implements IGetAddressDataApi {
  getAddressList(): Promise<DataApi[]> {
    console.log('test data')
    return Promise.resolve(addressData)
  }
}

//получить данные с реального апи
class RequestRealDataApi implements IGetAddressDataApi {
  getAddressList(): Promise<DataApi[]> {
    console.log('real data')
    return axios.get('/all-address.json').then((result: any) => {
      const data = result.data
      return JSON.parse(data)
    })
  }
}

//**********************************************

//замепить данные с апи к данных используемые в приложении
interface IApiDataToLocalDataMapper {
  mapping(apiData: DataApi[]): Promise<LocalData[]>
}
//мэпер для тестовых данных
class TestMapper implements IApiDataToLocalDataMapper {
  mapping(apiData: DataApi[]): Promise<LocalData[]> {
    return new Promise((resolve, reject) => {
      const result: Array<LocalData> = []
      apiData.forEach((item) => {
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

      if (!result.length) {
        reject('не удалось замепить тестовые данные')
      }

      resolve(result)
    })
  }
}
//мэпер для данных с реального апи
class RealDataMapper implements IApiDataToLocalDataMapper {
  mapping(apiData: DataApi[]): Promise<LocalData[]> {
    return Promise.reject('not RealDataMapper')
  }
}

//************************************

//метод который будет вызывать клиент
interface IData {
  getData(): Promise<LocalData[]>
}

//тестовые данные для клиента
class TestData implements IData {
  constructor(
    private requestData: IGetAddressDataApi,
    private mapper: IApiDataToLocalDataMapper
  ) {}

  getData(): Promise<LocalData[]> {
    return this.requestData
      .getAddressList()
      .then((data: DataApi[]) => this.mapper.mapping(data))
  }
}
