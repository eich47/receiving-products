import React from 'react'
import {IMaskInput} from 'react-imask'
import {connect} from 'react-redux'
import * as deliveryDateActions from './delivery-data.action'
import {deliveryDateSelector} from './delivety-date.selector'

const DeliveryDate = ({title, setDeliveryDate, deliveryDate}) => {
  const handleComplete = (date) => {
    setDeliveryDate(date)
  }

  const handleAccept = () => {
    if (deliveryDate !== null) {
      setDeliveryDate(null)
    }
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
