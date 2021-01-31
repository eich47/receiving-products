import React, {useState} from 'react'
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
  DATE: `дату доставки`,
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
  const [isSubmit, setIsSubmit] = useState(false)

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

  const handlerClick = () => {
    setIsSubmit(true)
  }

  return (
    <div className="mt-3 d-flex">
      <button
        className="btn btn-primary"
        disabled={getErrors().length}
        onClick={handlerClick}
      >
        заказать
      </button>
      <div className="ml-4">
        {getErrors().length ? START_MSG : ``}
        {getErrorsMessage(getErrors())}
      </div>
      {isSubmit && `спасибо`}
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
