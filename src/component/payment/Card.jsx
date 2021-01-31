import React, {useState} from 'react'
import {IMaskInput} from 'react-imask'
import * as paymentAction from './payment.action'
import {connect} from 'react-redux'

const SUCCESS_CLASS = 'is-valid'
const ERROR_CLASS = 'is-invalid'
const INPUT_CLASS = 'form-control'

const Card = ({setCard}) => {
  const [isCompleted, setIsComplete] = useState(null)

  function handleChange() {
    if (isCompleted !== false) {
      setIsComplete(false)
      setCard(null)
    }
  }

  function handleComplete(cardNumber) {
    setIsComplete(true)
    setCard(cardNumber)
  }

  function getClass() {
    if (isCompleted === null) {
      return INPUT_CLASS
    }
    return isCompleted
      ? `${INPUT_CLASS} ${SUCCESS_CLASS}`
      : `${INPUT_CLASS} ${ERROR_CLASS}`
  }

  return (
    <div className="mt-3">
      <h4 className="h6">введите номер карты</h4>
      <IMaskInput
        mask={'0000-0000-0000-0000'}
        onAccept={() => handleChange()}
        onComplete={(value) => {
          handleComplete(value)
        }}
        placeholder={`XXXX-XXXX-XXXX-XXXX`}
        className={getClass()}
      />
    </div>
  )
}

const mapDispatch = {
  setCard: paymentAction.setCard,
}

const connector = connect(null, mapDispatch)

export default connector(Card)
