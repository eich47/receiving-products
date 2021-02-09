import React, {useEffect} from 'react'
import Card from './Card'
import Phone from './Phone'
import PaymentInfo from './PaymentInfo'
import * as paymentActions from './payment.action'
import {connect, ConnectedProps} from 'react-redux'

const PaymentCard = (props: Props) => {
  useEffect(() => {
    return () => {
      props.cleanCard()
      props.cleanPhone()
    }
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
  cleanCard: paymentActions.cleanCard,
  cleanPhone: paymentActions.cleanPhone,
}
const connector = connect(null, mapDispatch)

type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux & {
  text: string
}

export default connector(PaymentCard)
