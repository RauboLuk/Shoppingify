import type { LinkProps } from '@chakra-ui/react'
import { Box, Link } from '@chakra-ui/react'
import NextLink from 'next/link'
import type { ReactElement } from 'react'

interface Props extends LinkProps {
    active?: boolean
    children: ReactElement
}

export const NavbarLink = ({ children, active, ...props }: Props) => {
    const background = active ? 'orange.400' : 'transparent'

    return (
        <Link
            as={NextLink}
            w={'100%'}
            h={'60px'}
            display={'flex'}
            justifyContent={'space-between'}
            alignItems={'center'}
            {...props}
        >
            <Box
                w="6px"
                h={'100%'}
                background={background}
                borderRadius={'0 7px 7px 0'}
            ></Box>
            {children}
            <Box w="6px" aria-hidden="true"></Box>
        </Link>
    )
}
