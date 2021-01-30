import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import thunk from 'redux-thunk'
import selectorReducer from './component/selector/selector.reducer'
import paymentReducer from './component/payment/payment.reducer'
import addressReducer from './component/address/address.reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const reducer = combineReducers({
  selector: selectorReducer,
  payment: paymentReducer,
  address: addressReducer,
})

const enchancer = composeEnhancers(applyMiddleware(thunk))

const store = createStore(reducer, enchancer)

export default store
