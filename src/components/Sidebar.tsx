import { Flex, GridItem } from '@chakra-ui/react'
import Image from 'next/image'

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
                    <Image
                        src="/menu_icon.svg"
                        width={36}
                        height={36}
                        alt="items"
                    />
                    <Image
                        src="/refresh_icon.svg"
                        width={36}
                        height={36}
                        alt="history"
                    />
                    <Image
                        src="/analytics_icon.svg"
                        width={36}
                        height={36}
                        alt="statistics"
                    />
                </Flex>
                <div>i3</div>
            </Flex>
        </GridItem>
    )
}

export default Sidebar
