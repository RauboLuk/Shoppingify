import { BackgroundProps, Flex, Heading } from '@chakra-ui/react'
import ItemPercentage from './ItemPercentage'

interface Props {
    title: string
    barColor?: BackgroundProps["bg"]
}

const TopList = ({ title, barColor }: Props) => {
    return (
        <Flex direction="column" gap="4" mt="8">
            <Heading size="md" pb="2" fontWeight="600">
                {title}
            </Heading>
            <ItemPercentage title={'Banana'} value={12} barColor={barColor}/>
            <ItemPercentage title={'Rice'} value={10} barColor={barColor}/>
            <ItemPercentage title={'Chicken 1kg'} value={8} barColor={barColor}/>
        </Flex>
    )
}

export default TopList
