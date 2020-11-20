import React from 'react'
import styles from './styles.module.scss'
import DevTerminal from './components/DevTerminal/DevTerminal'
import { Theme, ThemeContext } from './utils/ThemeContext'
import { CommandContext } from './utils/CommandContext'

interface Props {
  command: string
}

function ReactTerminalCommand({ command }: Props) {
  const [theme, setTheme] = React.useState(Theme.Light)

  const toggleTheme = () => {
    if (theme === Theme.Light) {
      setTheme(Theme.Dark)
    } else {
      setTheme(Theme.Light)
    }
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <CommandContext.Provider value={{ command }}>
        <div className={styles.container}>
          <DevTerminal command={command} />
        </div>
      </CommandContext.Provider>
    </ThemeContext.Provider>
  )
}

export default ReactTerminalCommand
