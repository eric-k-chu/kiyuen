export function isAlreadyExported(
  exports: string[],
  component: string
): boolean {
  return exports.some((line) => line.includes(component))
}

export function getShadcnComponent(): string {
  const component = process.argv.slice(2).at(0)
  if (!component) throw new Error('No component provided')
  return component
}
