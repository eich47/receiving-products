import React from 'react'
import {connect} from 'react-redux'
import {citySelector, getSelectedCitySelector} from './selector.selector'
import * as selectorActions from './selector.action'

const SELECTED_MENU_ITEM = 'red'

class Selector extends React.Component {
  componentDidMount() {
    this.props.fetchCityData()
  }

  handlerClick = (city) => {
    this.props.setSelectedCity(city)
    this.props.clearSelectedStreetHouse()
  }

  styleSelectedMenuItem = {borderColor: SELECTED_MENU_ITEM}

  render() {
    const {cityData, title, selectedCity} = this.props
    return (
      <div className="mt-3">
        <span>{title}</span>
        <ul className="nav nav-pills">
          {cityData.map((city) => (
            <li
              className="nav-item mr-2"
              key={city}
              onClick={() => this.handlerClick(city)}
            >
              <button
                className="btn btn-outline-primary"
                type="button"
                style={city === selectedCity ? this.styleSelectedMenuItem : {}}
              >
                {city}
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
    cityData: citySelector(state),
    selectedCity: getSelectedCitySelector(state),
  }
}

const mapDispatch = {
  fetchCityData: selectorActions.fetchCityDataAsync,
  setSelectedCity: selectorActions.setSelectedCity,
  setSelectedStreetHouse: selectorActions.setSelectedStreetHouse,
  clearSelectedStreetHouse: selectorActions.clearSelectedStreetHouse,
}

const connector = connect(mapState, mapDispatch)

export default connector(Selector)
