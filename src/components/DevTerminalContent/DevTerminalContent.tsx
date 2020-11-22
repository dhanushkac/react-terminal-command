import * as React from 'react'
import { useCommand } from '../../utils/CommandContext'
import { makeCommand } from '../../utils/TerminalHelper'
import { useTheme } from '../../utils/ThemeContext'
import styled from 'styled-components'
import { lighten } from 'polished'

interface Props {
  isDark: boolean
  color: string
}

const Content = styled.div`
  span {
    color: ${({ isDark, color }: Props) =>
      isDark ? lighten(0.2, color) : color};
  }

  &::before {
    color: ${({ isDark }: Props) => (isDark ? '#949494' : '#474747')};
    content: '$';
  }
`

const DevTerminalContent = () => {
  const { command } = useCommand()

  const { isDark, color } = useTheme()
  const processed = makeCommand(command)

  return (
    <Content
      isDark={isDark}
      color={color}
      data-testid='terminal-content'
      dangerouslySetInnerHTML={{
        __html: processed
      }}
    />
  )
}

export default DevTerminalContent
