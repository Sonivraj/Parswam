import type { ImgHTMLAttributes } from 'react'

export function Logo(props: ImgHTMLAttributes<HTMLImageElement>) {
  const { className, ...rest } = props
  return (
    <img {...rest} className={className} src="/images/jeans/logo-b.png" alt="Company Logo" width="130" height="50" />
  )
}
