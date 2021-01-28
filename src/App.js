import React from 'react'
import './App.css'
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom'
import Choice from './component/Сhoice'
import Delivery from './component/Delivery'
import PickUp from './component/PickUp'
import {Provider} from 'react-redux'
import store from './store'

function App() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <h1>Выберите способ получения товара</h1>
          <ul>
            <li>
              <Link to="/">
                <Choice title={`Самовывоз`} />
              </Link>
            </li>
            <li>
              <Link to="/delivery-by-courier">
                <Choice title={`Доставка курьером`} />
              </Link>
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
