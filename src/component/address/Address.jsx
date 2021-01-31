import React, {useState} from 'react'
import {connect} from 'react-redux'
import * as addressActions from './address.action'

const MIN_LENGTH_ADDRESS = 5
const SUCCESS_CLASS = 'is-valid'
const ERROR_CLASS = 'is-invalid'
const INPUT_CLASS = 'form-control'

const Address = ({title, setAddress}) => {
  const [isCorrect, setIsCorrect] = useState(null)

  const handleChange = (e) => {
    const value = e.target.value
    if (value.length >= MIN_LENGTH_ADDRESS) {
      setAddress(value)
      setIsCorrect(true)
    } else {
      setIsCorrect(false)
    }
  }

  function getClass() {
    if (isCorrect === null) {
      return INPUT_CLASS
    }
    return isCorrect
      ? `${INPUT_CLASS} ${SUCCESS_CLASS}`
      : `${INPUT_CLASS} ${ERROR_CLASS}`
  }

  return (
    <div className="mt-3">
      <label className="d-block">
        <span className="d-block">{title}</span>
        <input className={getClass()} type="text" onChange={handleChange} />
      </label>
    </div>
  )
}

const mapDispatch = {
  setAddress: addressActions.setAddress,
}

const connector = connect(null, mapDispatch)

export default connector(Address)
