import { Flex } from '@chakra-ui/react'
import { ProductCard } from './ProductCard'

interface Props {
    products: { name: string }[]
}

const ProductsList = ({ products }: Props) => {
    return (
        <Flex
            gap={{ base: 2, md: 5 }}
            wrap={'wrap'}
            rowGap={{ base: 6, md: 7 }}
        >
            {products.map((product) => (
                <ProductCard key={product.name} name={product.name} />
            ))}
        </Flex>
    )
}

export default ProductsList
