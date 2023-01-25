import ProductCategory from '@/components/ProductCategory'
import ShoppingList from '@/components/ShoppingList'
import { GridItem, Heading, Highlight } from '@chakra-ui/react'

const index = () => {
    return (
        <>
            <GridItem as={'section'} p={'2'}>
                <ProductCategory />
            </GridItem>
            <ShoppingList />
        </>
    )
}

export default index
