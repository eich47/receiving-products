import React from 'react'
import {connect} from 'react-redux'
import {citySelector} from './selector.selector'
import * as selectorActions from './selector.action'

class Selector extends React.Component {
  componentDidMount() {
    this.props.fetchCityData()
  }

  render() {
    const {cityData, title, setSelectedCity} = this.props
    return (
      <div>
        {title}
        <ul>
          {cityData.map((city) => (
            <li key={city} onClick={() => setSelectedCity(city)}>
              <button type="button">{city}</button>
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
  }
}

const mapDispatch = {
  fetchCityData: selectorActions.fetchCityData,
  setSelectedCity: selectorActions.setSelectedCity,
}

const connector = connect(mapState, mapDispatch)

export default connector(Selector)
