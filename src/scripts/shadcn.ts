import { Logger } from '@/common'
import { appendFile, readFile } from 'fs/promises'
import { resolve } from 'path'
import { cmd, exec } from './exec'
import { getShadcnComponent, isAlreadyExported } from './util'

const INDEX_PATH = '../components/ui/index.ts'

const logger = new Logger('scripts/shadcn')

async function addShadcnComponent(): Promise<void> {
  const component = getShadcnComponent()
  await cmd(`pnpm dlx shadcn-ui@latest add ${component}`)
  logger.success(`Added ${component} to components/ui`)

  const indexPath = resolve(import.meta.dirname, INDEX_PATH)

  const exports = await getPreviousExports(indexPath)

  if (isAlreadyExported(exports, component)) return

  const exportStatement = `export * from "./${component}";\n`
  await appendFile(indexPath, exportStatement, 'utf-8')
  logger.success(`Exported ${component} from components/ui`)
}

async function getPreviousExports(index: string): Promise<string[]> {
  const previous = await readFile(index, 'utf-8')
  return previous.split('\n')
}

exec(addShadcnComponent)
