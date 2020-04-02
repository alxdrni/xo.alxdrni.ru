import * as React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { State, IsCrossStepState, WinnerState, CellsState } from '@src/types'
import { resetGame } from '@src/store/cells'

const Message: React.FC = () => {
  const dispatch = useDispatch()

  const reset = React.useCallback(() => {
    dispatch(resetGame())
  }, [])

  const isCrossStep: IsCrossStepState = useSelector((state: State) => state.isCrossStep)
  const winner: WinnerState = useSelector((state: State) => state.winner)
  const cells: CellsState = useSelector((state: State) => state.cells)

  if (winner) {
    return (
      <div className="message">
        Победил { isCrossStep ? 'нолик' : 'крестик' }. <span onClick={ reset } >Сыграем еще?</span>
      </div>
    )
  } else if (!cells.includes('')) {
    return (
      <div className="message">
        Ничья. <span onClick={ reset } >Сыграем еще?</span>
      </div>
    )
  } else {
    return (
      <div className="message">
        Ходит { isCrossStep ? 'крестик' : 'нолик' }
      </div>
    )
  }
}

export default Message
