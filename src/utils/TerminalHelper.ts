export function makeCommand(command: string): string {
  const splitted = command.split(' ');
  const span = `<span> ${splitted[0]} </span>`;
  const rest = splitted.slice(1).join(' ');
  return span + rest;
}
