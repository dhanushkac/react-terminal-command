import { createContext, useContext } from 'react'

export enum Theme {
  // eslint-disable-next-line no-unused-vars
  Dark = 'Dark',
  // eslint-disable-next-line no-unused-vars
  Light = 'Light'
}

export type ThemeContextType = {
  isDark: boolean
  color: string
  toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextType>({
  isDark: false,
  color: 'red',
  toggleTheme: () => console.warn('no theme provider')
})
export const useTheme = () => useContext(ThemeContext)
