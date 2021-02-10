import React from 'react'
import {connect, ConnectedProps} from 'react-redux'
import * as selectorActions from './selector.action'
import {selectedPaymentSelector} from './selector.selector'
import {RootState} from '../../store'
import {PaymentType} from '../../shared/app_types'
import {ISelectorPaymentType} from './types'
import SelectorPayUi from './SelectorPayUI'

//выбор вида оплаты при самовывозе товара
function SelectorPickUpPay(props: Props) {
  const paymentTypePickIpList: ISelectorPaymentType[] = [
    {id: 1, name: 'Карта', code: PaymentType.CARD},
    {id: 2, name: 'Наличные', code: PaymentType.CASH},
  ]

  return (
    <SelectorPayUi
      payment={paymentTypePickIpList}
      setPickUpPaymentType={props.setPickUpPaymentType}
      getSelectedPaymentType={props.getSelectedPaymentType}
    />
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
