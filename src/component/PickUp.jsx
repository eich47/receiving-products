import React from 'react'
import SectionTitle from './SectionTitle'
import Selector from './selector/Selector'
import SelectorStreetHouse from './selector/SelectorStreetHouse'
import PickUpPayment from './payment/PickUpPayment'

const textForUser = `Товар на складе будет привязан к номеру телефона. В пункте выдачи назовите номер телефона, чтобы получить ваш заказ.  `

const PickUp = () => {
  return (
    <div>
      <SectionTitle title={`Самовывоз`} />
      <Selector title={`Город`} />
      <SelectorStreetHouse title={`Адрес пункта выдачи заказов`} />
      <PickUpPayment textForUser={textForUser} />
    </div>
  )
}

export default PickUp
