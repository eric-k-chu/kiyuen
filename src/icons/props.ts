export type Props = Partial<
  Omit<React.ComponentPropsWithoutRef<'svg'>, 'stroke'>
> & {
  size?: string | number
  title?: string
}
