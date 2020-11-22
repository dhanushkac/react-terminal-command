import * as React from 'react'
import { useTheme } from '../../utils/ThemeContext'

import styled from 'styled-components'
interface Props {
  icon: any
  onClick: () => void
}

interface BaseProps {
  hoverBackgroundColor: string
  hoverColor: string
}

const ButtonBase = styled.div`
  border-radius: 3px;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
  color: #8d8c8c;

  &:not(:last-child) {
    margin-right: 1px;
  }

  &:hover {
    background-color: ${({ hoverBackgroundColor }: BaseProps) =>
      hoverBackgroundColor};
    color: ${({ hoverColor }: BaseProps) => hoverColor};
    cursor: pointer;
  }
`

const Button = ({ icon, onClick }: Props) => {
  const { isDark } = useTheme()

  const colors: BaseProps = {
    hoverBackgroundColor: isDark ? '#636363' : '#e4e4e4',
    hoverColor: isDark ? '#e4e4e4' : '#636363'
  }

  return (
    <ButtonBase {...colors} data-testid='button' onClick={onClick}>
      {icon}
    </ButtonBase>
  )
}

export default Button
