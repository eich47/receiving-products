import React, {useEffect} from 'react'
import Card from './Card'
import Phone from './Phone'
import PaymentInfo from './PaymentInfo'
import * as paymentActions from './payment.action'
import {connect} from 'react-redux'

const PaymentCard = (props) => {
  useEffect(() => {
    props.setCard(null)
    props.setPhone(null)
  })
  return (
    <div className="mt-3">
      <Card />
      <Phone />
      <PaymentInfo {...props} />
    </div>
  )
}

const mapDispatch = {
  setCard: paymentActions.setCard,
  setPhone: paymentActions.setPhone,
}
const connector = connect(null, mapDispatch)

export default connector(PaymentCard)
