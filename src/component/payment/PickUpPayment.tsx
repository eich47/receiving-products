import React from 'react'
import SectionTitle from '../SectionTitle'
import SelectorPickUpPay from '../selector/SelectorPickUpPay'
import {connect, ConnectedProps} from 'react-redux'
import PaymentCard from './PaymentCard'
import PaymentCash from './PaymentCash'
import Order from '../order/Order'
import * as paymentTypes from './paymentTypes'
import {RootState} from '../../store'

// const PickUpPayment = ({paymentType, textForUser}) => {
const PickUpPayment = (props: Props) => {
  return (
    <div>
      <SectionTitle title={`Способ оплаты`} />
      <SelectorPickUpPay />
      {props.paymentType === paymentTypes.paymentByCard && (
        <PaymentCard text={props.textForUser} />
      )}
      {props.paymentType === paymentTypes.paymentByCash && (
        <PaymentCash text={props.textForUser} />
      )}
      <Order />
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

export default connector(PickUpPayment)
