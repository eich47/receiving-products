import React from 'react'
import SectionTitle from './SectionTitle'
import Selector from './selector/Selector'
import SelectorStreetHouse from './selector/SelectorStreetHouse'
import PickUpPayment from './payment/PickUpPayment'

const PickUp = () => {
  return (
    <div>
      <SectionTitle title={`Самовывоз`} />
      <Selector title={`Город`} />
      <SelectorStreetHouse title={`Адрес пункта выдачи заказов`} />
      <PickUpPayment />
    </div>
  )
}

export default PickUp
