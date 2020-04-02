import { CellState, CellsState, CellsActions, SelectCellAction, ClickCellAction, ResetGameAction } from '@src/types'
import { switchIsCrossStep } from './isCrossStep'
import { checkWinner } from './wins'

// initial state

export const cellInitialState: CellState = ''

export const cellsInitialState: CellsState = [
  '', '', '',
  '', '', '',
  '', '', ''
]

// actions

export const SELECT_CELL = 'SELECT_CELL'
export const RESET_GAME = 'RESET_GAME'

// reducer

export function cellReducer (state: CellState = cellInitialState, action: CellsActions): CellState {
  switch (action.type) {
    case SELECT_CELL:
      return action.payload.value
    default:
      return state
  }
}

export function cellsReducer (state: CellsState = cellsInitialState, action: CellsActions): CellsState {
  switch (action.type) {
    case SELECT_CELL:
      return state.map((cell, index) => index === action.payload.index ? cellReducer(cell, action) : cell) as CellsState
    case RESET_GAME:
      return cellsInitialState
    default:
      return state
  }
}

// action creators

export function resetGame (): ResetGameAction {
  return {
    type: RESET_GAME
  }
}

export function selectCell (index: number, value: CellState): SelectCellAction {
  return {
    type: SELECT_CELL,
    payload: {
      index,
      value
    }
  }
}

export function clickCell (index: number): ClickCellAction {
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  return (dispatch, getState) => {
    const { cells, isCrossStep, winner } = getState()
    if (!cells[index] && !winner) {
      dispatch(selectCell(index, isCrossStep ? 'x' : 'o'))
      dispatch(switchIsCrossStep())
      dispatch(checkWinner())
    }
  }
}
