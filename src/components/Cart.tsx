import { Circle, IconButton } from '@chakra-ui/react'
import { Icon } from './Icon'

export function Cart() {
    return (
        // <Circle size={'52px'} bg={'orange.400'}>
        //     <Icon src={'/shopping_cart_icon.svg'} alt="cart" />
        // </Circle>

        <IconButton
            aria-label="Open cart"
            icon={
                <Icon
                    src={'/shopping_cart_icon.svg'}
                    alt="cart"
                    filter={'revert(100%)'}
                />
            }
        />
    )
}
