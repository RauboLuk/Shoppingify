import { Flex, GridItem } from '@chakra-ui/react'
import { Icon } from './Icon'
import { NavbarLink } from './NavbarLink'
import { NavbarList } from './NavbarList'

function Sidebar() {
    return (
        <GridItem>
            <Flex
                as={'nav'}
                justifyContent={'space-between'}
                alignItems={'center'}
                direction={'column'}
                height={'100%'}
            >
                <div>i1</div>
                <Flex
                    justifyContent={'space-between'}
                    alignItems={'center'}
                    direction={'column'}
                    h={'235px'}
                    w={'100%'}
                >
                    <NavbarList />
                </Flex>
                <NavbarLink href="/" >
                    <Icon src="/shopping_cart_icon.svg" alt="statistics" />
                </NavbarLink>
            </Flex>
        </GridItem>
    )
}

export default Sidebar
