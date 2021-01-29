import React from 'react'
import SectionTitle from '../SectionTitle'
import SelectorPickUpPay from '../selector/SelectorPickUpPay'
import {connect} from 'react-redux'
import PaymentCard from './PaymentCard'
import PaymentCash from './PaymentCash'

const textForUser = `Товар на складе будет привязан к номеру телефона. В пункте выдачи назовите номер телефона, чтобы получить ваш заказ.`
const PickUpPayment = ({paymentType}) => {
  return (
    <div>
      <SectionTitle title={`Способ оплаты`} />
      <SelectorPickUpPay />
      {paymentType === 'card' && <PaymentCard text={textForUser} />}
      {paymentType === 'cash' && <PaymentCash text={textForUser} />}
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
