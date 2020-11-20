export function makeCommand(command: string): string {
  const splitted = command.split(' ')
  const span = `<span> ${splitted[0]} </span>`
  const rest = splitted.slice(1).join(' ')
  return span + rest
}

export enum Color {
  // eslint-disable-next-line no-unused-vars
  RED = 'Red',
  // eslint-disable-next-line no-unused-vars
  GREEN = 'Green',
  // eslint-disable-next-line no-unused-vars
  PURPLE = 'Purple',
  // eslint-disable-next-line no-unused-vars
  YELLOW = 'Yellow',
  // eslint-disable-next-line no-unused-vars
  BLUE = 'Blue'
}
