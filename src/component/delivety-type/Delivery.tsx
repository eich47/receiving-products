import React, {useEffect} from 'react'
import SectionTitle from '../SectionTitle'
import Selector from '../selector/Selector'
import Address from '../address/Address'
import DeliveryDate from '../delivery-date/DeliveryDate'
import DeliveryPayment from '../payment/DeliveryPayment'
import DeliveryOrder from '../order/DeliveryOrder'
import {connect, ConnectedProps} from 'react-redux'
import {setDeliveryType} from './deliveryType.action'
import {DeliveryType} from './types'

const textForUser = `Курьер позвонит на указанный номер за час до доставки заказа `

const Delivery = (props: Props) => {
  useEffect(() => {
    props.setDeliveryTypeOnHumanDelivery(DeliveryType.HUMAN_DELIVERY)
  })

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

const mapDispatch = {
  setDeliveryTypeOnHumanDelivery: setDeliveryType,
}

const connector = connect(null, mapDispatch)
type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux

export default connector(Delivery)
