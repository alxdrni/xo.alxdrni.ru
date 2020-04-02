import { WinnerState, SetWinnerAction, WinnerActions } from '@src/types'
import { RESET_GAME } from './cells'

// initial state

export const winnerInitialState: WinnerState = null

// actions

export const SET_WINNER = 'SET_WINNER'

// reducer

export function winnerReducer (state: WinnerState = winnerInitialState, action: WinnerActions): WinnerState {
  switch (action.type) {
    case SET_WINNER:
      return action.payload
    case RESET_GAME:
      return winnerInitialState
    default:
      return state
  }
}

// action creators

export function setWinner (value: WinnerState): SetWinnerAction {
  return {
    type: SET_WINNER,
    payload: value
  }
}
