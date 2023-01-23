import { ProductCard } from '@/components/ProductCard'
import ShoppingList from '@/components/ShoppingList'
import { Flex, GridItem } from '@chakra-ui/react'

const index = () => {
    return (
        <>
            <GridItem as={'section'} p={'2'}>
                qeqwe
                <Flex>
                    <ProductCard name="Test" />
                    <ProductCard name="Test" />
                </Flex>
            </GridItem>
            <ShoppingList />
        </>
    )
}

export default index
