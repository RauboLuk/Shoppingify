import Header from '@/components/Header'
import ProductCategory from '@/components/ProductCategory'
import ShoppingList from '@/components/ShoppingList'
import { GridItem } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

const index = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <GridItem as="section" p="2">
                <Header />
                <ProductCategory />
            </GridItem>
            <ShoppingList />{' '}
        </QueryClientProvider>
    )
}

export default index
