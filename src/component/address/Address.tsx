import React, {ChangeEvent, SyntheticEvent, useState} from 'react'
import {connect, ConnectedProps} from 'react-redux'
import * as addressActions from './address.action'

const MIN_LENGTH_ADDRESS = 5
const SUCCESS_CLASS = 'is-valid'
const ERROR_CLASS = 'is-invalid'
const INPUT_CLASS = 'form-control'

const Address = (props: Props) => {
  const initState: boolean | null = null
  const [isCorrect, setIsCorrect] = useState(initState)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    if (value.length >= MIN_LENGTH_ADDRESS) {
      props.setAddress(value)
      // @ts-ignore
      setIsCorrect(true)
    } else {
      // @ts-ignore
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
        <span className="d-block">{props.title}</span>
        <input className={getClass()} type="text" onChange={handleChange} />
      </label>
    </div>
  )
}

const mapDispatch = {
  setAddress: addressActions.setAddress,
}

const connector = connect(null, mapDispatch)

type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux & {
  title: string
}

export default connector(Address)
