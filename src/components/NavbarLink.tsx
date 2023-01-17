import type { LinkProps } from 'next/link'
import type { ReactElement } from 'react'
import NextLink from 'next/link'
import { Box, Link } from '@chakra-ui/react'

interface Props extends LinkProps {
    active?: boolean
    children: ReactElement
}

export const NavbarLink = ({ children, ...props }: Props) => {

    const background = props.active ? 'orange.400' : 'transparent'

    return (
        <Link
            as={NextLink}
            href='/'
            w={'100%'}
            h={'60px'}
            display={'flex'}
            justifyContent={'space-between'}
            alignItems={'center'}
        >
            <Box w="6px" h={'100%'} background={background} borderRadius={'0 7px 7px 0'}></Box>
            {children}
            <Box w="6px"></Box>
        </Link>
    )
}
