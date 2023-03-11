import { Flex, Heading } from '@chakra-ui/react'
import ItemPercentage from './ItemPercentage'

interface Props {
    title: string
}

const TopList = ({ title }: Props) => {
    return (
        <Flex direction="column" gap="4" mt="8">
            <Heading size="md" pb="2" fontWeight="600">
                {title}
            </Heading>
            <ItemPercentage title={'Banana'} value={12} />
            <ItemPercentage title={'Rice'} value={10} />
            <ItemPercentage title={'Chicken 1kg'} value={8} />
        </Flex>
    )
}

export default TopList
