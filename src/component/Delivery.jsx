import React from 'react'
import SectionTitle from './SectionTitle'
import Selector from './selector/Selector'
import Address from './address/Address'
import DeliveryDate from './delivery-date/DeliveryDate'

const Delivery = () => {
  return (
    <div>
      <SectionTitle title={`Доставка`} />
      <Selector title={`Город`} />
      <Address title={`Адрес`} />
      <DeliveryDate title={`Дата доставки`} />
    </div>
  )
}

export default Delivery
