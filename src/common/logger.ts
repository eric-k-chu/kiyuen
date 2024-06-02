const RED = '\x1b[31m'
const GREEN = '\x1b[32m'
const YELLOW = '\x1b[33m'
const BLUE = '\x1b[34m'
const RESET = '\x1b[0m'

export class Logger {
  private m_name: string
  constructor(name: string) {
    this.m_name = name
  }

  public success(message?: any, ...optionalParams: any[]): void {
    console.log(this.m_name, this.ansify('green', message, ...optionalParams))
  }

  public error(message?: any, ...optionalParams: any[]): void {
    console.error(this.m_name, this.ansify('red', message, ...optionalParams))
  }

  public warn(message?: any, ...optionalParams: any[]): void {
    console.warn(this.m_name, this.ansify('yellow', message, ...optionalParams))
  }

  public info(message?: any, ...optionalParams: any[]): void {
    console.warn(this.m_name, message, ...optionalParams)
  }

  private ansify(
    color: Color,
    message?: any,
    ...optionalParams: any[]
  ): string {
    const msg = `${message} ${optionalParams}`
    switch (color) {
      case 'red':
        return `${RED}${msg}${RESET}`
      case 'green':
        return `${GREEN}${msg}${RESET}`
      case 'yellow':
        return `${YELLOW}${msg} ${RESET}`
      case 'blue':
        return `${BLUE}${msg}${RESET}`
      default:
        return msg
    }
  }
}

type Color = 'red' | 'green' | 'yellow' | 'blue'
