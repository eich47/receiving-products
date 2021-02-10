import React from 'react'
import {connect, ConnectedProps} from 'react-redux'
import * as selectorActions from './selector.action'
import {ISelectorPaymentType} from './types'
import {PaymentType} from '../../shared/app_types'
import SelectorPayUi from './SelectorPayUI'
import {selectedPaymentSelector} from './selector.selector'
import {RootState} from '../../store'

//выбор вида оплаты товара при доставке курьером
function SelectorPickUpPay(props: Props) {
  const paymentTypeDeliveryList: ISelectorPaymentType[] = [
    {id: 1, name: 'Карта', code: PaymentType.CARD},
    {id: 2, name: 'Наличные курьеру', code: PaymentType.CASH},
  ]

  return <SelectorPayUi payment={paymentTypeDeliveryList} {...props} />
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
