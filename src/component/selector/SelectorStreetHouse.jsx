import React from 'react'
import {connect} from 'react-redux'
import {selectAddressByCity} from './selector.selector'
import * as selectorActions from './selector.action'

class SelectorStreetHouse extends React.Component {
  render() {
    const {title, addressData, setStreetHouse} = this.props
    if (addressData === null) {
      return null
    }
    return (
      <div>
        {title}
        <ul>
          {addressData.map((loc) => (
            <li
              key={loc.id}
              onClick={() => {
                setStreetHouse(loc.id)
              }}
            >
              <button type="button">
                {loc.address.city.street}, {loc.address.city.house}
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

const mapState = (state) => {
  return {
    addressData: selectAddressByCity(state),
  }
}
const mapDispatch = {
  setStreetHouse: selectorActions.setSelectedStreetHouse,
}

const connector = connect(mapState, mapDispatch)

export default connector(SelectorStreetHouse)
