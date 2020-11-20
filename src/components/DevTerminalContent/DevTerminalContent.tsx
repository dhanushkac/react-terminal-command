import * as React from 'react'
import { useCommand } from '../../utils/CommandContext'
import { makeCommand, Color } from '../../utils/TerminalHelper'
import { Theme, useTheme } from '../../utils/ThemeContext'
import styles from './DevTerminalContent.module.scss'

const DevTerminalContent = () => {
  const { command } = useCommand()

  const { theme, color } = useTheme()
  const isDark = theme === Theme.Dark
  const processed = makeCommand(command)

  let lightColor = styles.terminalContentRed
  let darkColor = styles.terminalContentDarkRed

  if (color === Color.RED) {
    lightColor = styles.terminalContentRed
    darkColor = styles.terminalContentDarkRed
  } else if (color === Color.GREEN) {
    lightColor = styles.terminalContentGreen
    darkColor = styles.terminalContentDarkGreen
  } else if (color === Color.YELLOW) {
    lightColor = styles.terminalContentYellow
    darkColor = styles.terminalContentDarkYellow
  } else if (color === Color.PURPLE) {
    lightColor = styles.terminalContentPurple
    darkColor = styles.terminalContentDarkPurple
  } else if (color === Color.BLUE) {
    lightColor = styles.terminalContentBlue
    darkColor = styles.terminalContentDarkBlue
  }

  return (
    <div
      className={isDark ? darkColor : lightColor}
      dangerouslySetInnerHTML={{
        __html: processed
      }}
    />
  )
}

export default DevTerminalContent
