import { Jimp, intToRGBA } from 'jimp'

export async function ascii(
  absolutePath: string,
  width: number,
  factor: number,
  asciiChars: `${string} `
): Promise<string | undefined> {
  try {
    const image = await Jimp.read(absolutePath)
    const aspectRatio = image.bitmap.height / image.bitmap.width
    const height = Math.floor(width * aspectRatio * factor)

    image.resize({ w: width, h: height })
    image.greyscale()

    let asciiArt = ''
    for (let y = 0; y < image.bitmap.height; y++) {
      for (let x = 0; x < image.bitmap.width; x++) {
        const pixel = intToRGBA(image.getPixelColor(x, y)).r
        const charIndex = Math.floor((pixel / 255) * (asciiChars.length - 1))
        asciiArt += asciiChars[charIndex]
      }
      asciiArt += '\n'
    }
    return asciiArt
  } catch (error) {
    console.error('Error generating ASCII art', error)
  }
}

export function requireParam<T>(
  val: T | undefined | null,
  error: string,
  additionalCheck?: (val: T) => boolean
): asserts val is T {
  if (typeof val === 'number' && !Number.isNaN(val)) return
  if (typeof val === 'string' && val.trim() !== '') return
  if (val && additionalCheck && additionalCheck(val)) return
  console.error(error, val)
  process.exit(1)
}
