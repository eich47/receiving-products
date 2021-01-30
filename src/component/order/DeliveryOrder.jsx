import React from 'react'
import {connect} from 'react-redux'
import {
  isFilledCardNumberSelector,
  isFilledPhoneSelector,
} from '../payment/payment.selector'
import {selectedPaymentSelector} from '../selector/selector.selector'
import * as paymentTypes from '../payment/paymentTypes'
import {selectTypedAddressSelector} from '../address/address.selector'
import {deliveryDateSelector} from '../delivery-date/delivety-date.selector'

const START_MSG = `Осталось заполнить `

const ErrorField = {
  ADDRESS: `адрес доставки`,
  DATE: `дата доставки`,
  CARD: `номер карты`,
  PHONE: `телефон`,
}

const DeliveryOrder = ({
  isFilledCardNumber,
  isFilledPhone,
  isSelectAddress,
  selectedPaymentType,
  selectDeliveryDate,
}) => {
  const getErrors = () => {
    const errors = []

    if (selectedPaymentType === paymentTypes.paymentByCard) {
      //номер карты
      if (!isFilledCardNumber) {
        errors.push(ErrorField.CARD)
      }
      //телефон
      if (!isFilledPhone) {
        errors.push(ErrorField.PHONE)
      }
      //адрес доставки введенной пользователем
      if (!isSelectAddress) {
        errors.push(ErrorField.ADDRESS)
      }
      //дата доставки
      if (!selectDeliveryDate) {
        errors.push(ErrorField.DATE)
      }
    } else if (selectedPaymentType === paymentTypes.paymentByCash) {
      //телефон
      if (!isFilledPhone) {
        errors.push(ErrorField.PHONE)
      }
      //адрес доставки введенной пользователем
      if (!isSelectAddress) {
        errors.push(ErrorField.ADDRESS)
      }
      //дата доставки
      if (!selectDeliveryDate) {
        errors.push(ErrorField.DATE)
      }
    } else {
      throw new Error(`неизвестый тип оплаты: ${selectedPaymentType}`)
    }

    return errors
  }

  const getErrorsMessage = (errors = []) => {
    return errors.length
      ? errors.reduce(
          (acc, cur, i, arr) => acc + (i < arr.length - 1 ? `, ` : ` и `) + cur
        )
      : ``
  }

  return (
    <div>
      <button disabled={getErrors().length}>заказать</button>
      <div>
        {getErrors().length ? START_MSG : ``}
        {getErrorsMessage(getErrors())}
      </div>
    </div>
  )
}

const mapState = (state) => {
  return {
    isFilledCardNumber: isFilledCardNumberSelector(state),
    isFilledPhone: isFilledPhoneSelector(state),
    isSelectAddress: selectTypedAddressSelector(state),
    selectedPaymentType: selectedPaymentSelector(state),
    selectDeliveryDate: deliveryDateSelector(state),
  }
}

const connector = connect(mapState, null)

export default connector(DeliveryOrder)
