export function toRotated(matrix: number[][]): number[][] {
  const size = matrix.length - 1
  const result: number[][] = []
  for (let i = 0; i <= size; i++) {
    result.push([])
    for (let j = 0; j <= size; j++) {
      result[i].push(matrix[size - j][i])
    }
  }
  return result
}
