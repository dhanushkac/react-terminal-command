import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Button from './Button'

test('Should render button', () => {
  const func = jest.fn()
  const { getByTestId } = render(<Button icon='icon' onClick={func} />)

  expect(getByTestId('button')).toBeInTheDocument()
  expect(getByTestId('button')).toHaveTextContent('icon')
})

test('Should button be triggered on click', () => {
  const func = jest.fn()
  const { getByTestId } = render(<Button icon='icon' onClick={func} />)

  expect(getByTestId('button')).toBeInTheDocument()
  expect(getByTestId('button')).toHaveTextContent('icon')

  fireEvent.click(getByTestId('button'))

  expect(func).toHaveBeenCalled()
})
