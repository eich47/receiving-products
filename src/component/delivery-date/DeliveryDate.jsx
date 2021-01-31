import React, {useState} from 'react'
import {IMaskInput} from 'react-imask'
import {connect} from 'react-redux'
import * as deliveryDateActions from './delivery-data.action'
import {deliveryDateSelector} from './delivety-date.selector'

const SUCCESS_CLASS = 'is-valid'
const ERROR_CLASS = 'is-invalid'
const INPUT_CLASS = 'form-control'

const DeliveryDate = ({title, setDeliveryDate, deliveryDate}) => {
  const [isCompleted, setIsComplete] = useState(null)

  const handleComplete = (date) => {
    setDeliveryDate(date)
    setIsComplete(true)
  }

  const handleAccept = () => {
    if (deliveryDate !== null) {
      setDeliveryDate(null)
    }
    setIsComplete(false)
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
    <div>
      {title}
      <IMaskInput
        mask={Date}
        onComplete={(value) => {
          handleComplete(value)
        }}
        onAccept={handleAccept}
        placeholder={`ДД.ММ.ГГГГ`}
        className={getClass()}
      />
    </div>
  )
}

const mapState = (state) => {
  return {
    deliveryDate: deliveryDateSelector(state),
  }
}

const mapDispatch = {
  setDeliveryDate: deliveryDateActions.setDeliveryData,
}
const connector = connect(mapState, mapDispatch)

export default connector(DeliveryDate)
