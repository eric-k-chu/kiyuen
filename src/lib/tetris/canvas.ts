const GRID = 32

export function renderCanvas(canvas: HTMLCanvasElement | null): void {
  if (!canvas) return
  resizeCanvas(canvas)
  const ctx = canvas.getContext('2d')
  if (!ctx) return
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  for (let row = 0; row < 20; row++) {
    for (let col = 0; col < 10; col++) {
      ctx.fillStyle = '#cdd1db'
      ctx.fillRect(col * GRID, row * GRID, GRID - 2, GRID - 2)
    }
  }
}

function resizeCanvas(canvas: HTMLCanvasElement): void {
  const { clientHeight, clientWidth } = canvas
  if (canvas.width !== clientWidth || canvas.height !== clientHeight) {
    canvas.width = clientWidth
    canvas.height = clientHeight
  }
}
