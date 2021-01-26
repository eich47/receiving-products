import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const reducer = combineReducers({
  //some reducer here
})

const enchancer = composeEnhancers(applyMiddleware(thunk))

const store = createStore(reducer, enchancer)

export default store
