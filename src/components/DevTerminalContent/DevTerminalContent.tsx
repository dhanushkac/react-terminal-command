import * as React from 'react'
import { useCommand } from '../../utils/CommandContext'
import { makeCommand, Color } from '../../utils/TerminalHelper'
import { useTheme } from '../../utils/ThemeContext'
import styles from './DevTerminalContent.module.scss'

const DevTerminalContent = () => {
  const { command } = useCommand()

  const { isDark, color } = useTheme()
  const processed = makeCommand(command)

  type colorMap = Record<Color, { lightColor: string; darkColor: string }>

  const colors: colorMap = {
    [Color.RED]: {
      lightColor: styles.terminalContentRed,
      darkColor: styles.terminalContentDarkRed
    },
    [Color.YELLOW]: {
      lightColor: styles.terminalContentYellow,
      darkColor: styles.terminalContentDarkYellow
    },
    [Color.GREEN]: {
      lightColor: styles.terminalContentGreen,
      darkColor: styles.terminalContentDarkGreen
    },
    [Color.PURPLE]: {
      lightColor: styles.terminalContentPurple,
      darkColor: styles.terminalContentDarkPurple
    },
    [Color.BLUE]: {
      lightColor: styles.terminalContentBlue,
      darkColor: styles.terminalContentDarkBlue
    }
  }

  const { lightColor, darkColor } = colors[color]

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
