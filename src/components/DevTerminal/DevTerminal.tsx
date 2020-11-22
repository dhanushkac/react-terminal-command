import * as React from 'react'
import { useTheme } from '../../utils/ThemeContext'
import DevTerminalContent from '../DevTerminalContent/DevTerminalContent'
import DevTerminalFooter from '../DevTerminalFooter/DevTerminalFooter'
import DevTerminalHeader from '../DevTerminalHeader/DevTerminalHeader'
import styled from 'styled-components'

interface Props {
  backgroundColor: string
  color: string
  borderColor: string
}

const Terminal = styled.div`
  border-radius: 5px;
  padding: 0.5rem 1rem 1rem;
  background-color: ${({ backgroundColor }: Props) => backgroundColor};
  font-family: 'Fira Code', monospace;
  font-size: 1.05em;
  border: 1px solid ${({ borderColor }: Props) => borderColor};
  color: ${({ color }: Props) => color};
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease-in-out;
  margin: 1rem 0;
`

const DevTerminal = () => {
  const [isCopied, setCopied] = React.useState(false)
  const { isDark } = useTheme()

  const colors: Props = {
    backgroundColor: isDark ? ' #313131' : '#fff',
    color: isDark ? '#e4e4e4' : '#313131',
    borderColor: isDark ? '#313131' : '#e4e4e4'
  }

  return (
    <Terminal {...colors} data-testid='terminal'>
      <DevTerminalHeader setCopied={(value: boolean) => setCopied(value)} />
      <DevTerminalContent />
      <DevTerminalFooter isCopied={isCopied} />
    </Terminal>
  )
}

export default DevTerminal
