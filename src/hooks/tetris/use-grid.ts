import { type Dispatch, type SetStateAction, useState } from 'react'

export type Dimensions = {
  width: number
  height: number
}

type UseGridOutput = [number[][], Dispatch<SetStateAction<number[][]>>]

export function useGrid(dimensions: Dimensions): UseGridOutput {
  return useState(buildGrid(dimensions))
}

function buildGrid({ width, height }: Dimensions): number[][] {
  return Array.from({ length: height }, () => Array.from({ length: width }, () => 0))
}
