import { createContext, useContext } from 'react'
import { Color } from './TerminalHelper'

export enum Theme {
  // eslint-disable-next-line no-unused-vars
  Dark = 'Dark',
  // eslint-disable-next-line no-unused-vars
  Light = 'Light'
}

export type ThemeContextType = {
  theme: Theme
  color: string
  toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: Theme.Light,
  color: Color.RED,
  toggleTheme: () => console.warn('no theme provider')
})
export const useTheme = () => useContext(ThemeContext)
