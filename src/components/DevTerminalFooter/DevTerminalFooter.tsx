import * as React from 'react'
import styles from './DevTerminalFooter.module.scss'

interface Props {
  isCopied: boolean
}

const DevTerminalFooter = ({ isCopied }: Props) => {
  return (
    <div data-testid='terminal-footer' className={styles.terminalFooter}>
      <span data-testid='copied'>{isCopied ? 'copied!' : ''}</span>
    </div>
  )
}

export default DevTerminalFooter
