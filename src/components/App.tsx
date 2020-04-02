import * as React from 'react'
import { hot } from 'react-hot-loader/root'
import { useDispatch } from 'react-redux'

import { loadWins } from '@src/store/wins'

import Box from './Box'
import Message from './Message'

const App: React.FC = () => {
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(loadWins())
  }, [])

  return (
    <div className="wrap">
      <div className="title">
        Крестики <span>XO</span> Нолики
      </div>
      <Box />
      <Message />
    </div>
  )
}

export default hot(App)
