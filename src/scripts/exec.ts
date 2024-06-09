import { Logger } from '@/common'
import { exec as executeCmd } from 'node:child_process'
import { promisify } from 'node:util'

const logger = new Logger('scripts/exec')

export const cmd = promisify(executeCmd)

export async function exec(script: () => Promise<void>): Promise<void> {
  try {
    await script()
  } catch (error) {
    if (error instanceof Error) {
      logger.error(error.message)
    } else {
      logger.error('An unknown error occurred', error)
    }
    process.exit(1)
  }
}
