import * as React from 'react'
// import * as PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'

import classNames from 'classnames'

import { CellState, WinnerState } from '@src/types'
import { clickCell } from '@src/store/cells'

interface CellProps {
  value: CellState;
  index: number;
  isCrossStep: boolean;
  winner: WinnerState;
}

const Cell: React.FC<CellProps> = ({ value, index, isCrossStep, winner }) => {
  const dispatch = useDispatch()
  const [isHovered, setIsHovered] = React.useState(false)

  const cellClass = classNames({
    cell: true,
    'is-selected': value,
    'is-highlighted': winner?.cells[index],
    'mod-x': value === 'x' || (!value && isHovered && isCrossStep && !winner),
    'mod-o': value === 'o' || (!value && isHovered && !isCrossStep && !winner)
  })

  const click = React.useCallback(
    () => dispatch(clickCell(index)),
    [dispatch]
  )

  const show = React.useCallback(
    () => setIsHovered(true),
    [setIsHovered]
  )

  const hide = React.useCallback(
    () => setIsHovered(false),
    [setIsHovered]
  )

  return (
    <div
      className={ cellClass }
      onClick={ click }
      onMouseEnter={ show }
      onMouseLeave={ hide }
    />
  )
}

/*
Cell.propTypes = {
  value: PropTypes.oneOf(['', 'x', 'o'] as const).isRequired,
  index: PropTypes.number.isRequired,
  isCrossStep: PropTypes.bool.isRequired,
  winner: PropTypes.object.isRequired
}
*/

export default Cell
