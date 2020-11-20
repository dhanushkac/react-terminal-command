import * as React from 'react'
import styles from './DevTerminalFooter.module.scss'

interface Props {
  isCopied: boolean
}

const DevTerminalFooter = ({ isCopied }: Props) => {
  return (
    <div className={styles.terminalFooter}>
      {isCopied && <span>copied!</span>}
    </div>
  )
}

export default DevTerminalFooter
