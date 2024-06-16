import { Theme, isDarkMode } from './theme'

export function setBgColor(theme: string | undefined): WithColor {
  return setColor(theme, { light: '#f4f4f5', dark: '#27272a' })
}

export function setParticleColor(theme: string | undefined): WithColor {
  return setColor(theme, { light: '#27272a', dark: '#f4f4f5' })
}

function setColor(theme: string | undefined, { light, dark }: ColorInput): WithColor {
  const color = isDarkMode(theme as Theme) ? dark : light
  return createColor(color)
}

function createColor(value: HexColor): WithColor {
  return { color: { value } }
}

type WithColor = {
  color: {
    value: string
  }
}

type ColorInput = {
  light: HexColor
  dark: HexColor
}

type HexColor = `#${string}`
