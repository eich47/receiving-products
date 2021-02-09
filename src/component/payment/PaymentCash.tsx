import React, {useEffect} from 'react'
import Phone from './Phone'
import PaymentInfo from './PaymentInfo'
import * as paymentActions from './payment.action'
import {connect, ConnectedProps} from 'react-redux'

const PaymentCash = (props: Props) => {
  useEffect(() => {
    return () => {
      props.cleanPhone()
    }
  })
  return (
    <div>
      <Phone />
      <PaymentInfo {...props} />
    </div>
  )
}

const mapDispatch = {
  cleanPhone: paymentActions.cleanPhone,
}
const connector = connect(null, mapDispatch)

type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux & {
  text: string
}

export default connector(PaymentCash)
