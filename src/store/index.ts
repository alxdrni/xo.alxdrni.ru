import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk, { ThunkMiddleware } from 'redux-thunk'

import { State, Actions } from '@src/types'

import { cellsReducer } from './cells'
import { isCrossStepReducer } from './isCrossStep'
import { winsReducer } from './wins'
import { winnerReducer } from './winner'

const rootReducer = combineReducers({
  cells: cellsReducer,
  isCrossStep: isCrossStepReducer,
  wins: winsReducer,
  winner: winnerReducer
})

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export default createStore(rootReducer, composeEnhancers(applyMiddleware(thunk as ThunkMiddleware<State, Actions>)))
