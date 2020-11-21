import React from 'react'
import DevTerminal from './components/DevTerminal/DevTerminal'
import { Theme, ThemeContext } from './utils/ThemeContext'
import { CommandContext } from './utils/CommandContext'
import { Color } from './utils/TerminalHelper'

interface Props {
  command: string
  withDark?: boolean
  color?: Color
}

const ReactTerminalCommand = ({ command, withDark, color }: Props) => {
  const [theme, setTheme] = React.useState(Theme.Light)

  React.useEffect(() => {
    withDark ? setTheme(Theme.Dark) : setTheme(Theme.Light)
  }, [withDark])

  const toggleTheme = () => {
    if (theme === Theme.Light) {
      setTheme(Theme.Dark)
    } else {
      setTheme(Theme.Light)
    }
  }

  const _color = color || Color.RED
  const isDark = theme === Theme.Dark

  return (
    <ThemeContext.Provider value={{ isDark, color: _color, toggleTheme }}>
      <CommandContext.Provider value={{ command }}>
        <DevTerminal />
      </CommandContext.Provider>
    </ThemeContext.Provider>
  )
}

const CommandColor = Color

export { ReactTerminalCommand, CommandColor }
