import { createContext, useContext } from 'react'

export enum Theme {
  Dark = 'Dark',
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
