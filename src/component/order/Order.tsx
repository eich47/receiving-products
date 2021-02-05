import React, {useState} from 'react'
import {connect, ConnectedProps} from 'react-redux'
import {
  isFilledCardNumberSelector,
  isFilledPhoneSelector,
} from '../payment/payment.selector'
import {
  isSelectAddressSelector,
  selectedPaymentSelector,
} from '../selector/selector.selector'
import * as paymentTypes from '../payment/paymentTypes'
import {RootState} from '../../store'

const START_MSG = `Осталось заполнить `

const ErrorField = {
  ADDRESS: `адрес`,
  DATE: `дату`,
  CARD: `номер карты`,
  PHONE: `телефон`,
}

const Order = (props: Props) => {
  const {
    isFilledPhone,
    isFilledCardNumber,
    isSelectAddress,
    selectedPaymentType,
  } = props

  const [isSubmit, setIsSubmit] = useState(false)

  const getErrors = (): string[] => {
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

  const getErrorsMessage = (errors: string[] = []): string => {
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
        disabled={!!getErrors().length}
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

const mapState = (state: RootState) => {
  return {
    isFilledCardNumber: isFilledCardNumberSelector(state),
    isFilledPhone: isFilledPhoneSelector(state),
    isSelectAddress: isSelectAddressSelector(state),
    selectedPaymentType: selectedPaymentSelector(state),
  }
}

const connector = connect(mapState)
type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsFromRedux

export default connector(Order)
