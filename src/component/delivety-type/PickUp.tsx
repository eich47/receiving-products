import React, {useEffect} from 'react'
import SectionTitle from '../SectionTitle'
import Selector from '../selector/Selector'
import SelectorStreetHouse from '../selector/SelectorStreetHouse'
import PickUpPayment from '../payment/PickUpPayment'
import {connect, ConnectedProps} from 'react-redux'
import * as actions from './deliveryType.action'
import {DeliveryType} from './types'

const textForUser = `Товар на складе будет привязан к номеру телефона. В пункте выдачи назовите номер телефона, чтобы получить ваш заказ.  `

const PickUp = (props: Props) => {
  useEffect(() => {
    props.setDeliveryTypeToPickUp(DeliveryType.PICKUP)
  })

  return (
    <div>
      <SectionTitle title={`Самовывоз`} />
      <Selector title={`Город`} />
      <SelectorStreetHouse title={`Адрес пункта выдачи заказов`} />
      <PickUpPayment textForUser={textForUser} />
    </div>
  )
}

const mapDispatch = {
  setDeliveryTypeToPickUp: actions.setDeliveryType,
}

const connector = connect(null, mapDispatch)

type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux

export default connector(PickUp)
