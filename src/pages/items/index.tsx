import Header from '@/components/Header'
import ProductCategory from '@/components/ProductCategory'
import ShoppingList from '@/components/ShoppingList'
import { GridItem } from '@chakra-ui/react'
import { ChangeEvent, useState } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

const Index = () => {
    const [search, setSearch] = useState('')

    function handleSearchUpdate(e: ChangeEvent<HTMLInputElement>) {
        setSearch(e.target.value)
    }
    return (
        <QueryClientProvider client={queryClient}>
            <GridItem as="section" p="2">
                <Header
                    search={search}
                    handleSearchUpdate={handleSearchUpdate}
                />
                <ProductCategory search={search} />
            </GridItem>
            <ShoppingList />{' '}
        </QueryClientProvider>
    )
}

export default Index
