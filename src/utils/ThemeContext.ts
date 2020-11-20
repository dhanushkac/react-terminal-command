import { createContext, useContext } from 'react'

export enum Theme {
  // eslint-disable-next-line no-unused-vars
  Dark = 'Dark',
  // eslint-disable-next-line no-unused-vars
  Light = 'Light'
}

export type ThemeContextType = {
  theme: Theme
  toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: Theme.Dark,
  toggleTheme: () => console.warn('no theme provider')
})
export const useTheme = () => useContext(ThemeContext)
