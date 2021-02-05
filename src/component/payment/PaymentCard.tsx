import React, {useEffect} from 'react'
import Card from './Card'
import Phone from './Phone'
import PaymentInfo from './PaymentInfo'
import * as paymentActions from './payment.action'
import {connect, ConnectedProps} from 'react-redux'

const PaymentCard = (props: Props) => {
  useEffect(() => {
    // @ts-ignore
    props.setCard(null)
    // @ts-ignore
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

type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux & {
  text: string
}

export default connector(PaymentCard)
