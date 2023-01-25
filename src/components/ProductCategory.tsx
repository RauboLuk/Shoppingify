import { Box, Flex, Heading } from '@chakra-ui/react'
import ProductsList from './ProductsList'

const ProductCategory = () => {
    const productsExample = [
        { name: 'Kiwi' },
        { name: 'Avocado' },
        { name: 'Pre-cooked corn 450g' },
    ]
    const categories = [
        { name: 'Fruit and vegetables', products: productsExample },
        { name: 'Meat and Fish', products: productsExample },
    ]
    return (
        <Flex gap={{base: 5, md: 10}} direction={'column'}>
            {categories.map((category) => (
                <Box key={category.name}>
                    <Heading size={'md'} pb={4}>{category.name}</Heading>
                    <ProductsList products={productsExample} />
                </Box>
            ))}
        </Flex>
    )
}

export default ProductCategory
