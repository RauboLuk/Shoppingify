import { Flex, GridItem } from '@chakra-ui/react'
import Image from 'next/image'
import { Icon } from './Icon'
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
                <Image
                    src="/shopping_cart_icon.svg"
                    width={36}
                    height={36}
                    alt="statistics"
                />
            </Flex>
        </GridItem>
    )
}

export default Sidebar
