import { configureStore, combineReducers } from '@reduxjs/toolkit'
import counterReducer, { increment, decrement, incrementByAmount} from '../reducers/counter'
import indexReducer from '../reducers/index'

const reducers = combineReducers({
  counter: counterReducer,
  index: indexReducer
})
export const store = configureStore({
  reducer: reducers
})