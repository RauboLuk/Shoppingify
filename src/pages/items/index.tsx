import ProductsList from '@/components/ProductsList'
import ShoppingList from '@/components/ShoppingList'
import { GridItem } from '@chakra-ui/react'

const index = () => {
    return (
        <>
            <GridItem as={'section'} p={'2'}>
                <ProductsList />
            </GridItem>
            <ShoppingList />
        </>
    )
}

export default index
