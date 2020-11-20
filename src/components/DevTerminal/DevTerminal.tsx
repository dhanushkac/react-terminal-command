import * as React from 'react'
import { Theme, useTheme } from '../../utils/ThemeContext'
import DevTerminalContent from '../DevTerminalContent/DevTerminalContent'
import DevTerminalFooter from '../DevTerminalFooter/DevTerminalFooter'
import DevTerminalHeader from '../DevTerminalHeader/DevTerminalHeader'
import styles from './DevTerminal.module.scss'

const DevTerminal = () => {
  const [isCopied, setCopied] = React.useState(false)
  const { theme } = useTheme()

  const isDark = theme === Theme.Dark

  return (
    <div className={isDark ? styles.terminalDark : styles.terminal}>
      <DevTerminalHeader setCopied={(value: boolean) => setCopied(value)} />
      <DevTerminalContent />
      <DevTerminalFooter isCopied={isCopied} />
    </div>
  )
}

export default DevTerminal
