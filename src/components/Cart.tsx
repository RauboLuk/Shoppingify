import { Box, Center, Circle } from '@chakra-ui/react'
import { Icon } from './Icon'

export function Cart() {
    const counter = 5
    return (
        <Circle size={'52px'} bg={'orange.400'} p={'10px'} position="relative">
            <Center
                position="absolute"
                right={-1}
                top={-1}
                w={5}
                h={5}
                bg="red.500"
                zIndex={1}
                borderRadius={4}
                color={'white'}
                fontSize="xs"
            >
                {counter}
            </Center>
            <Box filter={'auto'} invert={'100%'}>
                <Icon src={'/shopping_cart_icon.svg'} alt="cart" />
            </Box>
        </Circle>
    )
}
