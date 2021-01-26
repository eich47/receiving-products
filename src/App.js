import React from 'react'
import './App.css';
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import Сhoice from "./component/Сhoice";

function App() {
  return (
    <div>
      <BrowserRouter>
      <h1>Выберите способ получения товара</h1>
        <ul>
          <li><Link to="/">
            <Сhoice title={`Самовывоз`}/>
          </Link></li>
          <li><Link to="/delivery-by-courier">
            <Сhoice title={`Доставка курьером`}/>
          </Link></li>
        </ul>
        <Switch>
          <Route exact path="/">
            самовывоз
          </Route>
          <Route path="/delivery-by-courier">
              курьер
          </Route>
          <Route path="*">404</Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
