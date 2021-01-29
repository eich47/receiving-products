import React from 'react'
import Phone from './Phone'
import PaymentInfo from './PaymentInfo'

const PaymentCash = (props) => {
  return (
    <div>
      <Phone />
      <PaymentInfo {...props} />
    </div>
  )
}

export default PaymentCash
