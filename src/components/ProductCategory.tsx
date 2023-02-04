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
import { escapeRegExp } from 'lodash'
import { useQuery } from 'react-query'
import ProductsList from './ProductsList'

interface Props {
    search: string
}

const ProductCategory = ({ search }: Props) => {
    const { isLoading, error, data } = useQuery<Category[], Error>(
        'categories',
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

    const filteredData = data ? searchItem(data, search) : undefined

    return filteredData ? (
        <Flex gap={{ base: 5, md: 10 }} direction={'column'}>
            {filteredData.map((category) => (
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

function searchItem(categories: Category[], name: string) {
    if (name === '') return categories
    const escapedRegExp = new RegExp(escapeRegExp(name), 'i')
    const filteredProducts = categories.map((category) => ({
        ...category,
        products: category.products.filter((product) =>
            escapedRegExp.test(product.name)
        ),
    }))
    return filteredProducts.filter((category) => category.products.length > 0)
}

export default ProductCategory
