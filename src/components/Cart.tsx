import { Circle, Icon, IconButton } from '@chakra-ui/react'
import IconShoppingCart from './icons/IconShoppingCart'



export function Cart() {
    return (
        <Circle size={'52px'} bg={'orange.400'}>
            <Icon as={IconShoppingCart} h="4" w={4}/>
            
        </Circle>

        // <IconButton aria-label="Open cart" icon={<IconShoppingCart />} />
    )
}
