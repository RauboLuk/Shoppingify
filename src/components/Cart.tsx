import { Box, Circle } from '@chakra-ui/react'
import { Icon } from './Icon'

export function Cart() {
    return (
        <Circle size={'52px'} bg={'orange.400'} p={'10px'}>
            <Box filter={'auto'} invert={'100%'}>
                <Icon src={'/shopping_cart_icon.svg'} alt="cart" />
            </Box>
        </Circle>
    )
}
