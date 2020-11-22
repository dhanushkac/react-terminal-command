import { useTheme } from '../../utils/ThemeContext'
import { Sun, Copy, Moon } from 'react-feather'
import * as React from 'react'
import Button from '../Button/Button'
import { useCommand } from '../../utils/CommandContext'
import styled from 'styled-components'

interface Props {
  setCopied: (value: boolean) => void
}

const Header = styled.div`
  display: flex;
  align-self: flex-end;
`

const DevTerminalHeader = ({ setCopied }: Props) => {
  const { isDark, toggleTheme } = useTheme()
  const { command } = useCommand()

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
    <Header data-testid='terminal-header'>
      <Button
        icon={isDark ? <Sun size={16} /> : <Moon size={16} />}
        onClick={() => toggleTheme()}
      />
      <Button icon={<Copy size={16} />} onClick={() => copyToClipBoard()} />
    </Header>
  )
}

export default DevTerminalHeader
