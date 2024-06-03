export const NEXTJS = buildTech('/nextdotjs.svg', 'Next.js', true)
export const REACT = buildTech('/react.svg', 'React')
export const SST = buildTech('/sst.svg', 'SST')
export const VERCEL = buildTech('/vercel.svg', 'Vercel', true)
export const AWS_LAMBDA = buildTech('/awslambda.svg', 'AWS Lambda')
export const AWS_DYNAMODB = buildTech('/amazondynamodb.svg', 'AWS DynamoDb')
export const POSTGRESQL = buildTech('/postgresql.svg', 'PostgreSQL')
export const TYPESCRIPT = buildTech('/typescript.svg', 'TypeScript')
export const JAVASCRIPT = buildTech('/javascript.svg', 'JavaScript')
export const NODEJS = buildTech('/nodejs.svg', 'Node.js')
export const TURBOREPO = buildTech('/turborepo.svg', 'Turborepo')
export const VITE = buildTech('/vite.svg', 'Vite')
export const GIT = buildTech('/git.svg', 'Git')
export const TAILWINDCSS = buildTech('/tailwindcss.svg', 'Tailwind CSS')
export const EXPRESS = buildTech('/express.svg', 'Express', true)
export const CSHARP = buildTech('/csharp.svg', 'C#')
export const CPP = buildTech('/cpp.svg', 'C++')
export const UNITY = buildTech('/unity.svg', 'Unity', true)
export const BLENDER = buildTech('/blender.svg', 'Blender')
export const LINUX = buildTech('/linux.svg', 'Linux')
export const SWIFT = buildTech('/swift.svg', 'Swift')
export const PNPM = buildTech('/pnpm.svg', 'pnpm')
export const NPM = buildTech('/npm.svg', 'npm')
export const SHADCN = buildTech('/shadcnui.svg', 'shadcn/ui', true)
export const THREEJS = buildTech('/threejs.svg', 'Three.js', true)
export const AWS = buildTech('/aws.svg', 'AWS')
export const GITHUB = buildTech('/github.svg', 'GitHub', true)
export const GHPAGES = buildTech('/ghpages.svg', 'GitHub Pages')

export type Tech = {
  src: string
  alt: string
  invert?: boolean
}

function buildTech(src: string, alt: string, invert?: boolean): Tech {
  return { src, alt, invert }
}
