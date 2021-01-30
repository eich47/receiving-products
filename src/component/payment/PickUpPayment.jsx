import React from 'react'
import SectionTitle from '../SectionTitle'
import SelectorPickUpPay from '../selector/SelectorPickUpPay'
import {connect} from 'react-redux'
import PaymentCard from './PaymentCard'
import PaymentCash from './PaymentCash'
import Order from '../order/Order'
import * as paymentTypes from './paymentTypes'

const PickUpPayment = ({paymentType, textForUser}) => {
  return (
    <div>
      <SectionTitle title={`Способ оплаты`} />
      <SelectorPickUpPay />
      {paymentType === paymentTypes.paymentByCard && (
        <PaymentCard text={textForUser} />
      )}
      {paymentType === paymentTypes.paymentByCash && (
        <PaymentCash text={textForUser} />
      )}
      <Order />
    </div>
  )
}

const mapState = (state) => {
  return {
    paymentType: state.selector.selectedPaymentType,
  }
}

const connector = connect(mapState, null)

export default connector(PickUpPayment)
