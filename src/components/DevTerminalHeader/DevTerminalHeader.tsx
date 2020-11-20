import { Theme, useTheme } from '../../utils/ThemeContext'
import { Sun, Copy, Moon } from 'react-feather'
import * as React from 'react'
import Button from '../Button/Button'
import styles from './DevTerminalHeader.module.scss'
import { useCommand } from '../../utils/CommandContext'

interface Props {
  setCopied: (value: boolean) => void
}

const DevTerminalHeader = ({ setCopied }: Props) => {
  const { theme, toggleTheme } = useTheme()
  const { command } = useCommand()

  const isDark = theme === Theme.Dark

  const copyToClipBoard = async () => {
    try {
      await navigator.clipboard.writeText(command)
      setCopied(true)

      setTimeout(() => {
        setCopied(false)
      }, 1000)
    } catch (err) {
      setCopied(false)
    }
  }

  return (
    <div className={isDark ? styles.terminalHeaderDark : styles.terminalHeader}>
      <Button
        icon={isDark ? <Sun size={16} /> : <Moon size={16} />}
        onClick={() => toggleTheme()}
      />
      <Button icon={<Copy size={16} />} onClick={() => copyToClipBoard()} />
    </div>
  )
}

export default DevTerminalHeader
