import { BackgroundProps, Box } from '@chakra-ui/react'

interface Props {
    progress: number
    barColor?: BackgroundProps['bg']
}

const ProgressBar = ({ progress, barColor }: Props) => {
    return (
        <Box h="1.5" w="full" borderRadius="full" bg="gray.200" pos="relative">
            <Box
                h="1.5"
                borderRadius="full"
                bg={barColor ?? 'orange.300'}
                pos="absolute"
                style={{ width: `${progress}%` }}
            ></Box>
        </Box>
    )
}

export default ProgressBar
