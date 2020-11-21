import * as React from 'react'
import { useTheme } from '../../utils/ThemeContext'

import styles from './Button.module.scss'

interface Props {
  icon: any
  onClick: () => void
}

const Button = ({ icon, onClick }: Props) => {
  const { isDark } = useTheme()

  return (
    <div>
      <div
        className={isDark ? styles.btnDark : styles.btn}
        data-testid='button'
        onClick={onClick}
      >
        {icon}
      </div>
    </div>
  )
}

export default Button
