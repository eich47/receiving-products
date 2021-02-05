import React, {useState} from 'react'
import {connect} from 'react-redux'
import * as selectorActions from './selector.action'

function SelectorPickUpPay({setPickUpPaymentType}) {
  const [payment] = useState([
    {id: 1, name: 'Карта', code: 'card'},
    {id: 2, name: 'Наличные курьеру', code: 'cash'},
  ])

  return (
    <div>
      <ul className="nav">
        {payment.map((paymentItem) => (
          <li
            className="nav-item mr-2"
            key={paymentItem.id}
            onClick={() => {
              setPickUpPaymentType(paymentItem.code)
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

export default connector(SelectorPickUpPay)
