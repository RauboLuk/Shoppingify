import { Flex } from '@chakra-ui/react'
import { ProductCard } from './ProductCard'

const ProductsList = () => {
    const productsExample = [
        { name: 'Kiwi' },
        { name: 'Avocado' },
        { name: 'Pre-cooked corn 450g' },
    ]
    return (
        <Flex gap={{ base: 2, md: 5 }} wrap={'wrap'}>
            {productsExample.map((product) => (
                <ProductCard key={product.name} name={product.name} />
            ))}
        </Flex>
    )
}

export default ProductsList
