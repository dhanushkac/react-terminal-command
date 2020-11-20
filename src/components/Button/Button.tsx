import * as React from 'react'
import { Theme, useTheme } from '../../utils/ThemeContext'

import styles from './Button.module.scss'

const Button = (props: { icon: any; onClick: () => void }) => {
  const { icon, onClick } = props
  const { theme } = useTheme()
  const isDark = theme === Theme.Dark

  return (
    <div>
      <div className={isDark ? styles.btnDark : styles.btn} onClick={onClick}>
        {icon}
      </div>
    </div>
  )
}

export default Button
