import React, {useState} from 'react'
import {connect, ConnectedProps} from 'react-redux'
import * as selectorActions from './selector.action'
import {selectedPaymentSelector} from './selector.selector'
import {RootState} from '../../store'
import {PaymentType} from '../../shared/app_types'
import {ISelectorPaymentType} from './types'

const SELECTED_MENU_ITEM = 'red'

function SelectorPickUpPay(props: Props) {
  const initState: ISelectorPaymentType[] = [
    {id: 1, name: 'Карта', code: PaymentType.CARD},
    {id: 2, name: 'Наличные', code: PaymentType.CASH},
  ]
  const [payment] = useState(initState)

  const styleSelectedMenuItem = {borderColor: SELECTED_MENU_ITEM}

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

const mapState = (state: RootState) => {
  return {
    getSelectedPaymentType: selectedPaymentSelector(state),
  }
}

const mapDispatch = {
  setPickUpPaymentType: selectorActions.setPickUpPaymentType,
}

const connector = connect(mapState, mapDispatch)

type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux

export default connector(SelectorPickUpPay)
