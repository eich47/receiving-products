import React from 'react'
import {connect, ConnectedProps} from 'react-redux'
import {
  citySelector,
  getSelectedCitySelector,
  isErrorSelector,
  isLoadingSelector,
} from './selector.selector'
import * as selectorActions from './selector.action'
import {RootState} from '../../store'

const SELECTED_MENU_ITEM = 'red'

class Selector extends React.Component<Props, RootState> {
  componentDidMount() {
    this.props.fetchCityData()
  }

  handlerClick = (city: string) => {
    this.props.setSelectedCity(city)
    this.props.clearSelectedStreetHouse()
  }

  styleSelectedMenuItem = {borderColor: SELECTED_MENU_ITEM}

  renderContent() {
    if (this.props.isLoading) {
      return `Загрузка адресов...`
    }
    if (this.props.isError) {
      return `Произошла ошибка. Сделайте заказ через менеджера`
    } else {
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
                  style={
                    city === selectedCity ? this.styleSelectedMenuItem : {}
                  }
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

  render() {
    return <>{this.renderContent()}</>
  }
}

const mapState = (state: RootState) => {
  return {
    cityData: citySelector(state),
    selectedCity: getSelectedCitySelector(state),
    isLoading: isLoadingSelector(state),
    isError: isErrorSelector(state),
  }
}

const mapDispatch = {
  fetchCityData: selectorActions.fetchCityDataAsync,
  setSelectedCity: selectorActions.setSelectedCity,
  setSelectedStreetHouse: selectorActions.setSelectedStreetHouse,
  clearSelectedStreetHouse: selectorActions.clearSelectedStreetHouse,
}

const connector = connect(mapState, mapDispatch)

type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux & {
  title: string
}

export default connector(Selector)
