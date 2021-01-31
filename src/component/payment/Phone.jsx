import React, {useState} from 'react'
import {connect} from 'react-redux'
import * as paymentAction from './payment.action'
import {IMaskInput} from 'react-imask'

const SUCCESS_CLASS = 'is-valid'
const ERROR_CLASS = 'is-invalid'
const INPUT_CLASS = 'form-control'

const Phone = ({setPhone}) => {
  const [isCompleted, setIsComplete] = useState(null)

  function handleChange() {
    if (isCompleted !== false) {
      setIsComplete(false)
      setPhone(null)
    }
  }

  function handleComplete(phone) {
    setIsComplete(true)
    setPhone(phone)
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
      <h4 className="h6">введите номер телефона</h4>
      <IMaskInput
        mask={'+{7}(000)000-00-00'}
        onAccept={() => handleChange()}
        onComplete={(value) => {
          handleComplete(value)
        }}
        placeholder={`+7(999)999-99-99`}
        className={getClass()}
      />
    </div>
  )
}

const mapDispatch = {
  setPhone: paymentAction.setPhone,
}

const connector = connect(null, mapDispatch)

export default connector(Phone)
