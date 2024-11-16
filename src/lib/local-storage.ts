export function getLsItem<T extends string>(key: string, defaultValue: T): T {
  const item = localStorage.getItem(key)
  if (item) return item as T
  return defaultValue
}

export function setLsItem<T extends string>(key: string, value: T): void {
  localStorage.setItem(key, value)
}
