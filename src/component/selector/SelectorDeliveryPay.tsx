import React, {useState} from 'react'
import {connect, ConnectedProps} from 'react-redux'
import * as selectorActions from './selector.action'
import {ISelectorPaymentType} from './types'
import {PaymentType} from '../../shared/app_types'

function SelectorPickUpPay(props: Props) {
  const initState: ISelectorPaymentType[] = [
    {id: 1, name: 'Карта', code: PaymentType.CARD},
    {id: 2, name: 'Наличные курьеру', code: PaymentType.CASH},
  ]
  const [payment] = useState(initState)

  return (
    <div>
      <ul className="nav">
        {payment.map((paymentItem) => (
          <li
            className="nav-item mr-2"
            key={paymentItem.id}
            onClick={() => {
              props.setPickUpPaymentType(paymentItem.code)
            }}
          >
            <button type="button" className="btn btn-outline-primary">
              {paymentItem.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

const mapDispatch = {
  setPickUpPaymentType: selectorActions.setPickUpPaymentType,
}

const connector = connect(null, mapDispatch)

type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux

export default connector(SelectorPickUpPay)
