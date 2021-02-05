import React from 'react'

const PaymentInfo = (props: Props) => {
  return <div className="mt-3">{props.text}</div>
}

type Props = {
  text: string
}

export default PaymentInfo
