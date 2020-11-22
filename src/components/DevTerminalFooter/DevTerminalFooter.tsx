import * as React from 'react'
import styled from 'styled-components'
interface Props {
  isCopied: boolean
}

const Footer = styled.div`
  display: flex;
  align-self: flex-end;
  font-size: 0.7em;
  height: 15px;
`

const DevTerminalFooter = ({ isCopied }: Props) => {
  return (
    <Footer data-testid='terminal-footer'>
      <span data-testid='copied'>{isCopied ? 'copied!' : ''}</span>
    </Footer>
  )
}

export default DevTerminalFooter
