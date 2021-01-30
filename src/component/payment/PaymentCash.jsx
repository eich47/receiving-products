import React, {useEffect} from 'react'
import Phone from './Phone'
import PaymentInfo from './PaymentInfo'
import * as paymentActions from './payment.action'
import {connect} from 'react-redux'

const PaymentCash = (props) => {
  useEffect(() => {
    props.setPhone(null)
  })
  return (
    <div>
      <Phone />
      <PaymentInfo {...props} />
    </div>
  )
}

const mapDispatch = {
  setPhone: paymentActions.setPhone,
}
const connector = connect(null, mapDispatch)

export default connector(PaymentCash)
