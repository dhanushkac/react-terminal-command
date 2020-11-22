import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import ReactTerminalCommand from '.'

afterEach(cleanup)

test('Should render react-terminal-command', () => {
  const { getByText, getByTestId } = render(
    <ReactTerminalCommand command='yarn install react-terminal-command' />
  )

  expect(getByText(/install react-terminal-command/i)).toBeInTheDocument()
  expect(getByText(/yarn/i)).toBeInTheDocument()
  expect(getByTestId('terminal')).toHaveClass('terminal')
  expect(getByTestId('terminal-header')).toBeInTheDocument()
  expect(getByTestId('terminal-content')).toBeInTheDocument()
  expect(getByTestId('terminal-footer')).toBeInTheDocument()
  expect(getByTestId('copied')).toBeInTheDocument()
})
