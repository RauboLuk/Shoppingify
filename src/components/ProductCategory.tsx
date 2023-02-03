import { Category } from '@/pages/api/products'
import { Box, Flex, Heading } from '@chakra-ui/react'
import { useQuery } from 'react-query'
import ProductsList from './ProductsList'

const ProductCategory = () => {
    const { isLoading, error, data } = useQuery<Category[], Error>('repoData', () =>
        fetch('./api/products').then((res) => res.json())
    )

    if (isLoading) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message

    return data ? (
        <Flex gap={{ base: 5, md: 10 }} direction={'column'}>
            {data.map((category) => (
                <Box key={category.name}>
                    <Heading size={'md'} pb={4}>
                        {category.name}
                    </Heading>
                    <ProductsList products={category.products} />
                </Box>
            ))}
        </Flex>
    ) : null
}

export default ProductCategory
