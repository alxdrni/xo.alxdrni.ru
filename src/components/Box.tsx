import * as React from 'react'
import { useSelector } from 'react-redux'

import { State, CellState, CellsState } from '@src/types'

import Cell from './Cell'

const Box: React.FC = () => {
  const cells: CellsState = useSelector((state: State) => state.cells)
  const isCrossStep = useSelector((state: State) => state.isCrossStep)
  const winner = useSelector((state: State) => state.winner)

  let boxClass = 'box'
  if (winner) boxClass += ' mod-' + winner.line

  return (
    <div className={ boxClass }>
      { cells.map((cell: CellState, index: number) => {
        return (
          <Cell
            key={ index }
            value={ cell }
            index={ index }
            isCrossStep={ isCrossStep }
            winner={ winner }
          />
        )
      }) }
    </div>
  )
}

export default Box
