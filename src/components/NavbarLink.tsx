import { Box } from '@chakra-ui/layout'
import type { LinkProps } from 'next/link'
import Link from 'next/link'
import type { ReactElement } from 'react'

interface Props extends LinkProps {
    active?: boolean
    children: ReactElement
}

export const NavbarLink = ({ children, ...props }: Props) => {
    return (
        <Box
            w="100%"
            borderLeft="1px solid orange"
            display={'flex'}
            justifyContent={'center'}
        >
            <Link {...props}>{children}</Link>
        </Box>
    )
}
