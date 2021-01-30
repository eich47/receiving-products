import React from 'react'
import {connect} from 'react-redux'
import {
  isFilledCardNumberSelector,
  isFilledPhoneSelector,
} from '../payment/payment.selector'
import {
  isSelectAddressSelector,
  selectedPaymentSelector,
} from '../selector/selector.selector'
import * as paymentTypes from '../payment/paymentTypes'

const START_MSG = `Осталось заполнить `

const ErrorField = {
  ADDRESS: `адрес`,
  DATE: `дату`,
  CARD: `номер карты`,
  PHONE: `телефон`,
}

const Order = ({
  isFilledCardNumber,
  isFilledPhone,
  isSelectAddress,
  selectedPaymentType,
}) => {
  const getErrors = () => {
    const errors = []

    if (selectedPaymentType === paymentTypes.paymentByCard) {
      if (!isFilledCardNumber) {
        errors.push(ErrorField.CARD)
      }
      if (!isFilledPhone) {
        errors.push(ErrorField.PHONE)
      }
      if (!isSelectAddress) {
        errors.push(ErrorField.ADDRESS)
      }
    } else if (selectedPaymentType === paymentTypes.paymentByCash) {
      if (!isFilledPhone) {
        errors.push(ErrorField.PHONE)
      }
      if (!isSelectAddress) {
        errors.push(ErrorField.ADDRESS)
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
    isSelectAddress: isSelectAddressSelector(state),
    selectedPaymentType: selectedPaymentSelector(state),
  }
}

const connector = connect(mapState, null)

export default connector(Order)
