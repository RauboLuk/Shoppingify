import Header from '@/components/Header'
import ProductCategory from '@/components/ProductCategory'
import ShoppingList from '@/components/ShoppingList'
import { GridItem } from '@chakra-ui/react'

const index = () => {
    return (
        <>
            <GridItem as="section" p="2">
                <Header />
                <ProductCategory />
            </GridItem>
            <ShoppingList />
        </>
    )
}

export default index
