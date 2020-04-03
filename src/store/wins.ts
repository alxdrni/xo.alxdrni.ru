import { WinsState, WinsActions, LoadWinsAction, SetWinsAction, CheckWinnerAction } from '@src/types'
import { setWinner } from './winner'

// initial state

export const winsInitialState: WinsState = null

// actions

export const LOAD_WINS = 'LOAD_WINS'
export const SET_WINS = 'SET_WINS'

// reduser

export function winsReducer (state: WinsState = winsInitialState, action: WinsActions): WinsState {
  switch (action.type) {
    case SET_WINS:
      return action.payload
    default:
      return state
  }
}

// action creators

export function setWins (wins: WinsState): SetWinsAction {
  return {
    type: SET_WINS,
    payload: wins
  }
}

export function loadWins (): LoadWinsAction {
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  return async (dispatch) => {
    const response = await fetch('/wins.json')
    if (response.ok) {
      const data = await response.json()
      data && data.wins && dispatch(setWins(data.wins))
    }
  }
}

export function checkWinner (): CheckWinnerAction {
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  return (dispatch, getState) => {
    const { cells, wins } = getState()

    if (wins && wins.length) {
      const result = wins.find(win => {
        return win.cells.every((cell, index) => {
          return !cell || cell === cells[index]
        })
      })

      result && dispatch(setWinner(result))

      /*
      for (let i = 0; i < wins.length; i++) {
        let result = true

        for (let j = 0; j < wins[i].cells.length; j++) {
          if (wins[i].cells[j] && wins[i].cells[j] !== cells[j]) {
            result = false
            break
          }
        }

        if (result) {
          dispatch(setWinner(wins[i]))
          break
        }
      }
      */
    }
  }
}
