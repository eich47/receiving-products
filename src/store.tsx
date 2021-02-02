import {applyMiddleware, combineReducers, createStore} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import ReduxThunk from 'redux-thunk'
import selectorReducer from './component/selector/selector.reducer'
import paymentReducer from './component/payment/payment.reducer'
import addressReducer from './component/address/address.reducer'
import deliverDataReducer from './component/delivery-date/delivery-data.reducer'

// const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose || compose

const reducers = combineReducers({
  selector: selectorReducer,
  payment: paymentReducer,
  address: addressReducer,
  deliveryDate: deliverDataReducer,
})

// const enchancer = composeEnhancers(applyMiddleware(ReduxThunk))

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(ReduxThunk))
)

export default store

export type RootState = ReturnType<typeof reducers>
