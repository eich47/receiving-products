import React from 'react'
import {connect} from 'react-redux'
import * as addressActions from './address.action'

const Address = ({title, setAddress}) => {
  return (
    <div>
      <label>
        {title}
        <input type="text" onChange={(e) => setAddress(e.target.value)} />
      </label>
    </div>
  )
}

const mapDispatch = {
  setAddress: addressActions.setAddress,
}

const connector = connect(null, mapDispatch)

export default connector(Address)
