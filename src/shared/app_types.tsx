//данные от апи
export type DataApi = {
  id: number
  city: string
  street: string
  house: number
}
//данные с которыми работает приложение
export type LocalData = {
  id: number
  city: string
  address: {
    city: {
      street: string
      house: number
    }
  }
}

//тип оплаты за товар
export type PaymentType = 'card' | 'cash'
