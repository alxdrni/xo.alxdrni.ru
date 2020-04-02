import { IsCrossStepState, SwitchIsCrossStepAction, IsCrossStepActions } from '@src/types'
import { RESET_GAME } from './cells'

// initial state

export const isCrossStepInitialState: IsCrossStepState = true

// actions

export const SWITCH_IS_CROSS_STEP = 'SWITCH_IS_CROSS_STEP'

// reducer

export function isCrossStepReducer (state: IsCrossStepState = isCrossStepInitialState, action: IsCrossStepActions): IsCrossStepState {
  switch (action.type) {
    case SWITCH_IS_CROSS_STEP:
      return !state
    case RESET_GAME:
      return isCrossStepInitialState
    default:
      return state
  }
}

// action creators

export function switchIsCrossStep (): SwitchIsCrossStepAction {
  return {
    type: SWITCH_IS_CROSS_STEP
  }
}
