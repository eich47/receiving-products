import React from 'react'
import SectionTitle from './SectionTitle'
import Selector from './selector/Selector'
import Address from './address/Address'
import DeliveryDate from './delivery-date/DeliveryDate'
import DeliveryPayment from './payment/DeliveryPayment'
import DeliveryOrder from './order/DeliveryOrder'

const textForUser = `Курьер позвонит на указанный номер за час до доставки заказа `

const Delivery = () => {
  return (
    <div>
      <SectionTitle title={`Доставка`} />
      <Selector title={`Город`} />
      <Address title={`Адрес`} />
      <DeliveryDate title={`Дата доставки`} />
      <DeliveryPayment textForUser={textForUser} />
      <DeliveryOrder />
    </div>
  )
}

export default Delivery
