import React from 'react'
import SectionTitle from '../SectionTitle'
import {connect} from 'react-redux'
import PaymentCard from './PaymentCard'
import PaymentCash from './PaymentCash'
import * as paymentTypes from './paymentTypes'
import SelectorDeliveryPay from '../selector/SelectorDeliveryPay'

const DeliveryPayment = ({paymentType, textForUser}) => {
  return (
    <div>
      <SectionTitle title={`Способ оплаты`} />
      <SelectorDeliveryPay />
      {paymentType === paymentTypes.paymentByCard && (
        <PaymentCard text={textForUser} />
      )}
      {paymentType === paymentTypes.paymentByCash && (
        <PaymentCash text={textForUser} />
      )}
    </div>
  )
}

const mapState = (state) => {
  return {
    paymentType: state.selector.selectedPaymentType,
  }
}

const connector = connect(mapState, null)

export default connector(DeliveryPayment)
