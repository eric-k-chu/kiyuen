import { Jimp, intToRGBA } from 'jimp' // Ensure you install Jimp: `npm install jimp`
import { writeFile } from 'node:fs/promises'

const ASCII_CHARS = 'chu. '

async function imageToAscii(path: string, width: number): Promise<string | undefined> {
  try {
    const image = await Jimp.read(path)

    const aspectRatio = image.bitmap.height / image.bitmap.width
    const newHeight = Math.floor(width * aspectRatio * 0.55)

    image.resize({ w: width, h: newHeight })
    image.greyscale()

    let asciiArt = ''
    for (let y = 0; y < image.bitmap.height; y++) {
      for (let x = 0; x < image.bitmap.width; x++) {
        const pixel = intToRGBA(image.getPixelColor(x, y)).r

        const charIndex = Math.floor((pixel / 255) * (ASCII_CHARS.length - 1))
        asciiArt += ASCII_CHARS[charIndex]
      }
      asciiArt += '\n'
    }

    return asciiArt
  } catch (error) {
    console.error(error)
  }
}

const imagePath = './scripts/sample.png'
const width = 100
const asciiArt = await imageToAscii(imagePath, width)
if (asciiArt) {
  await writeFile('./scripts/ascii.txt', asciiArt)
}
