import React from 'react'
import Card from './Card'
import Phone from './Phone'
import PaymentInfo from './PaymentInfo'

const PaymentCard = (props) => {
  return (
    <div>
      <Card />
      <Phone />
      <PaymentInfo {...props} />
    </div>
  )
}

export default PaymentCard
