import { createContext, useContext } from 'react'

export type CommandContextType = {
  command: string
}

export const CommandContext = createContext<CommandContextType>({
  command: 'give your command'
})
export const useCommand = () => useContext(CommandContext)
