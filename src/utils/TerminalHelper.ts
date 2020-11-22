export function makeCommand(command: string): string {
  const splitted = command.split(' ')
  const span = `<span> ${splitted[0]} </span>`
  const rest = splitted.slice(1).join(' ')
  return span + rest
}

export const isValidHexColorCode = (_color: string): boolean => {
  const pattern = /^#([0-9A-F]{3}){1,2}$/i
  const isValid = pattern.test(_color)

  if (!isValid) {
    console.error('⛔️ Invalid hex color code provided. Default will be used.')
  }

  return isValid
}
