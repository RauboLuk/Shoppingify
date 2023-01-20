import Image from 'next/image'
import type { ImageProps } from 'next/image'

export const Icon = ({ ...props }: ImageProps) => {
    return <Image width={36} height={36} {...props}/>
}
