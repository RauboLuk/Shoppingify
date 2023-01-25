import ProductsList from '@/components/ProductsList'
import ShoppingList from '@/components/ShoppingList'
import { GridItem, Heading, Highlight } from '@chakra-ui/react'

const index = () => {
    return (
        <>
            <GridItem as={'section'} p={'2'}>
                <Heading
                    as="h1"
                    size={'lg'}
                    pb={{ base: 8, md: 12 }}
                    maxW={'30rem'}
                >
                    <Highlight
                        query="Shoppingify"
                        styles={{ color: 'orange.400' }}
                    >
                        Shoppingify
                    </Highlight>{' '}
                    allows you take your shopping list wherever you go
                </Heading>
                <ProductsList />
            </GridItem>
            <ShoppingList />
        </>
    )
}

export default index
