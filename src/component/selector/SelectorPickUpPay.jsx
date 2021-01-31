import React, {useState} from 'react'
import {connect} from 'react-redux'
import * as selectorActions from './selector.action'
import {selectedPaymentSelector} from './selector.selector'

const SELECTED_MENU_ITEM = 'red'

function SelectorPickUpPay({setPickUpPaymentType, getSelectedPaymentType}) {
  const [payment] = useState([
    {id: 1, name: 'Карта', code: 'card'},
    {id: 2, name: 'Наличные', code: 'cash'},
  ])

  const styleSelectedMenuItem = {borderColor: SELECTED_MENU_ITEM}

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
            <button
              type="button"
              className="btn btn-outline-primary"
              style={
                getSelectedPaymentType === paymentItem.code
                  ? styleSelectedMenuItem
                  : {}
              }
            >
              {paymentItem.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

const mapState = (state) => {
  return {
    getSelectedPaymentType: selectedPaymentSelector(state),
  }
}

const mapDispatch = {
  setPickUpPaymentType: selectorActions.setPickUpPaymentType,
}

const connector = connect(mapState, mapDispatch)

export default connector(SelectorPickUpPay)
