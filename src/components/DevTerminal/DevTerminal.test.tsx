import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import DevTerminal from './DevTerminal'

afterEach(cleanup)

test('Should render react-terminal-command', () => {
  const { getByTestId } = render(<DevTerminal />)

  expect(getByTestId('terminal')).toBeInTheDocument()
  expect(getByTestId('terminal-header')).toBeInTheDocument()
  expect(getByTestId('terminal-content')).toBeInTheDocument()
  expect(getByTestId('terminal-footer')).toBeInTheDocument()
  expect(getByTestId('copied')).toBeInTheDocument()
})
