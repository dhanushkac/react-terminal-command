import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import DevTerminalFooter from './DevTerminalFooter'

test('Should render the footer', () => {
  const { getByTestId } = render(<DevTerminalFooter isCopied={false} />)
  expect(getByTestId('terminal-footer')).toBeInTheDocument()
  expect(getByTestId('copied')).toBeEmptyDOMElement()
})

test('Should render the footer when isCopied set to true', () => {
  const { getByTestId } = render(<DevTerminalFooter isCopied />)
  expect(getByTestId('terminal-footer')).toBeInTheDocument()
  expect(getByTestId('copied')).toHaveTextContent('copied!')
})
