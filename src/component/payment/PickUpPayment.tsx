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
        <PaymentCard text={textForUser} />
      )}
      {paymentType === paymentTypes.paymentByCash && (
        <PaymentCash text={textForUser} />
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

const connector = connect(mapState, null)

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsFromRedux

export default connector(PickUpPayment)
