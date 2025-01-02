import { existsSync } from 'node:fs'
import { writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { ascii, requireParam } from './ascii.util'

const path = process.argv[2]
const width = Number(process.argv[3])
const factor = process.argv[4] ? Number(process.argv[4]) : 0.55

requireParam(path, 'Invalid path', (path) => existsSync(path))
requireParam(width, 'Invalid width', (width) => width > 0)
requireParam(factor, 'Invalid factor', (factor) => factor >= 0.4 && factor <= 0.6)

console.log('Path:', path)
console.log('Width:', width)
console.log('Factor:', factor)
console.log('Generating ASCII art...')

const asciiArt = await ascii(resolve(path), width, factor, 'zhuqianyin  ')

requireParam(asciiArt, 'Error generating ASCII art')

await writeFile('./ascii.txt', asciiArt)
