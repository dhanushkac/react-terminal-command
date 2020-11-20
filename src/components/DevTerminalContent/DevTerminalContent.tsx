import * as React from 'react'
import { useCommand } from '../../utils/CommandContext'
import { makeCommand } from '../../utils/TerminalHelper'
import { Theme, useTheme } from '../../utils/ThemeContext'
import styles from './DevTerminalContent.module.scss'

const DevTerminalContent = () => {
  const { command } = useCommand()

  const { theme } = useTheme()
  const isDark = theme === Theme.Dark
  const processed = makeCommand(command)

  return (
    <div
      className={isDark ? styles.terminalContentDark : styles.terminalContent}
      dangerouslySetInnerHTML={{
        __html: processed
      }}
    />
  )
}

export default DevTerminalContent
