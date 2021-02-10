import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, NavLink, Route, Switch} from 'react-router-dom'
import Choice from './component/Сhoice'
import Delivery from './component/delivety-type/Delivery'
import PickUp from './component/delivety-type/PickUp'
import {Provider} from 'react-redux'
import store from './store'

function App() {
  return (
    <div className="container w-50">
      <Provider store={store}>
        <BrowserRouter basename="/receiving-products-form">
          <h1 className="h1">Выберите способ получения товара</h1>
          <ul className="nav nav-pills my-4">
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                className="nav-link"
                activeClassName="active"
              >
                <Choice title={`Самовывоз`} />
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/delivery-by-courier"
                className="nav-link"
                activeClassName="active"
              >
                <Choice title={`Доставка курьером`} />
              </NavLink>
            </li>
          </ul>
          <Switch>
            <Route exact path="/">
              <PickUp />
            </Route>
            <Route path="/delivery-by-courier">
              <Delivery />
            </Route>
            <Route path="*">404</Route>
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  )
}

export default App
