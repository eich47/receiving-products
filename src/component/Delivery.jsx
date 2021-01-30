import React from 'react'
import SectionTitle from './SectionTitle'
import Selector from './selector/Selector'
import Address from './address/Address'

const Delivery = () => {
  return (
    <div>
      <SectionTitle title={`Доставка`} />
      <Selector title={`Город`} />
      <Address title={`Адрес`} />
    </div>
  )
}

export default Delivery
