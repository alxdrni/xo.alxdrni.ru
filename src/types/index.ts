import { ThunkAction } from 'redux-thunk'

import { SELECT_CELL, RESET_GAME } from '@src/store/cells'
import { SWITCH_IS_CROSS_STEP } from '@src/store/isCrossStep'
import { SET_WINNER } from '@src/store/winner'
import { SET_WINS } from '@src/store/wins'

export type ThunkResult<R> = ThunkAction<R, State, undefined, Actions>

export type Action = string

export interface ActionCreator {
  type: string;
  payload?: unknown;
}

/* CELLS */

export type CellState = '' | 'x' | 'o'
export type CellsState = [CellState, CellState, CellState, CellState, CellState, CellState, CellState, CellState, CellState]

export interface SelectCellAction {
  type: typeof SELECT_CELL;
  payload: {
    index: number;
    value: CellState;
  };
}

export interface ResetGameAction {
  type: typeof RESET_GAME;
}

export type CellsActions = SelectCellAction | SwitchIsCrossStepAction | ResetGameAction
export type ClickCellAction = ThunkResult<void>

/* IS_CROSS_STEP */

export type IsCrossStepState = boolean

export interface SwitchIsCrossStepAction {
  type: typeof SWITCH_IS_CROSS_STEP;
}

export type IsCrossStepActions = SwitchIsCrossStepAction | ResetGameAction

/* IS_FINISHED */

export type WinnerState = WinState | null

export interface SetWinnerAction {
  type: typeof SET_WINNER;
  payload: WinnerState;
}

export type WinnerActions = SetWinnerAction | ResetGameAction

/* WINS */

export type WinState = {
  cells: CellsState;
  player: CellState;
  line: string;
}

export type WinsState = WinState[] | null

export interface SetWinsAction {
  type: typeof SET_WINS;
  payload: WinsState;
}

export type LoadWinsAction = ThunkResult<Promise<void>>
export type CheckWinnerAction = ThunkResult<void>

export type WinsActions = SetWinsAction

/* STATE */

export interface State {
  cells: CellsState;
  isCrossStep: boolean;
  wins: WinsState;
  winner: WinnerState;
}

/* Actions */

export type Actions = CellsActions | IsCrossStepActions | WinsActions | WinnerActions
