import React from 'react'
import SectionTitle from '../SectionTitle'
import {connect, ConnectedProps} from 'react-redux'
import PaymentCard from './PaymentCard'
import PaymentCash from './PaymentCash'
import * as paymentTypes from './paymentTypes'
import SelectorDeliveryPay from '../selector/SelectorDeliveryPay'
import {RootState} from '../../store'

// const DeliveryPayment = ({paymentType, textForUser}) => {
const DeliveryPayment = (props: Props) => {
  return (
    <div>
      <SectionTitle title={`Способ оплаты`} />
      <SelectorDeliveryPay />
      {props.paymentType === paymentTypes.paymentByCard && (
        <PaymentCard text={props.textForUser} />
      )}
      {props.paymentType === paymentTypes.paymentByCash && (
        <PaymentCash text={props.textForUser} />
      )}
    </div>
  )
}

const mapState = (state: RootState) => {
  return {
    paymentType: state.selector.selectedPaymentType,
  }
}

const connector = connect(mapState)

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsFromRedux & {
  textForUser: string
}

export default connector(DeliveryPayment)
