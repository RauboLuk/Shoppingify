import { Category } from '@/pages/api/products'
import {
    Alert,
    AlertIcon,
    Box,
    Flex,
    Grid,
    Heading,
    Skeleton,
} from '@chakra-ui/react'
import { useQuery } from 'react-query'
import ProductsList from './ProductsList'

const ProductCategory = () => {
    const { isLoading, error, data } = useQuery<Category[], Error>(
        'repoData',
        () => fetch('./api/products').then((res) => res.json())
    )

    if (isLoading)
        return (
            <Box>
                <Skeleton height={50} />
                <Grid mt={2} gridTemplateColumns="repeat(2, 1fr)" gap={2}>
                    <Skeleton height={50} />
                    <Skeleton height={50} />
                    <Skeleton height={50} />
                    <Skeleton height={50} />
                </Grid>
            </Box>
        )

    if (error)
        return (
            <Alert status="error">
                <AlertIcon />
                There was an error processing your request. Please try again
                later.
            </Alert>
        )

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
