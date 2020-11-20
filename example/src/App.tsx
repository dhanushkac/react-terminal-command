import React from 'react'

import ReactTerminalCommand from 'react-terminal-command'
import 'react-terminal-command/dist/index.css'

const App = () => {
  return <ReactTerminalCommand command='yarn install firebase' />
}

export default App
