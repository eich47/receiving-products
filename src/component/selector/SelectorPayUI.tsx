import React from 'react'
import {ISelectorPaymentType} from './types'
import {PaymentType} from '../../shared/app_types'

const SELECTED_MENU_ITEM = 'red'

const SelectorPayUi = (props: Props) => {
  const styleSelectedMenuItem = {borderColor: SELECTED_MENU_ITEM}

  return (
    <div>
      <ul className="nav">
        {props.payment.map((paymentItem) => (
          <li
            className="nav-item mr-2"
            key={paymentItem.id}
            onClick={() => {
              props.setPickUpPaymentType(paymentItem.code)
            }}
          >
            <button
              type="button"
              className="btn btn-outline-primary"
              style={
                props.getSelectedPaymentType === paymentItem.code
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

type Props = {
  payment: ISelectorPaymentType[]
  setPickUpPaymentType: (code: PaymentType) => void
  getSelectedPaymentType: PaymentType
}

export default SelectorPayUi
