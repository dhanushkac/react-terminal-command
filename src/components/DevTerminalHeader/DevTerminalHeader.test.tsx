import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import DevTerminalHeader from './DevTerminalHeader'

test('Should render Header', () => {
  const func = jest.fn()
  const { getByTestId, getAllByTestId } = render(
    <DevTerminalHeader setCopied={func} />
  )

  expect(getByTestId('terminal-header')).toBeInTheDocument()
  expect(getAllByTestId('button')).toHaveLength(2)
})

test('Should render Header Buttons', () => {
  const func = jest.fn()
  const { getAllByTestId } = render(<DevTerminalHeader setCopied={func} />)
  expect(getAllByTestId('button')).toHaveLength(2)

  fireEvent.click(getAllByTestId('button')[1])
  expect(func).toHaveBeenCalled()
})
