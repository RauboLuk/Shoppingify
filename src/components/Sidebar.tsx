import { Flex, GridItem } from '@chakra-ui/react'
import { Cart } from './Cart'
import { NavbarLink } from './NavbarLink'
import { NavbarList } from './NavbarList'

function Sidebar() {
    return (
        <GridItem pt={'10px'} pb={'10px'} bg={'orange.100'}>
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
                <Cart />
            </Flex>
        </GridItem>
    )
}

export default Sidebar
