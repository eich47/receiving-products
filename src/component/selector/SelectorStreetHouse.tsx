import React from 'react'
import {connect, ConnectedProps} from 'react-redux'
import {selectAddressByCity, getFullAddressSelector} from './selector.selector'
import * as selectorActions from './selector.action'
import {RootState} from '../../store'

const SELECTED_MENU_ITEM = 'red'

class SelectorStreetHouse extends React.Component<Props, RootState> {
  styleSelectedMenuItem = {borderColor: SELECTED_MENU_ITEM}

  render() {
    const {title, addressData, setStreetHouse, selectedFullAddress} = this.props
    if (addressData === null) {
      return null
    }
    return (
      <div className="mt-3">
        {title}
        <ul className="nav">
          {addressData.map((loc) => (
            <li
              className="nav-item mr-2"
              key={loc.id}
              onClick={() => {
                setStreetHouse(loc.id)
              }}
            >
              <button
                type="button"
                className="btn btn-outline-primary"
                style={
                  loc.id === selectedFullAddress?.id
                    ? this.styleSelectedMenuItem
                    : {}
                }
              >
                {loc.address.city.street}, {loc.address.city.house}
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

const mapState = (state: RootState) => {
  return {
    addressData: selectAddressByCity(state),
    selectedFullAddress: getFullAddressSelector(state),
  }
}
const mapDispatch = {
  setStreetHouse: selectorActions.setSelectedStreetHouse,
}

const connector = connect(mapState, mapDispatch)

type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux & {
  title: string
}

export default connector(SelectorStreetHouse)
