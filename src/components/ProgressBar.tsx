import { Box } from '@chakra-ui/react'

const ProgressBar = ({ progress }: { progress: number }) => {
    return (
        <Box h="1.5" w="full" borderRadius="full" bg="gray.200" pos="relative">
            <Box
                h="1.5"
                borderRadius="full"
                bg="orange.300"
                pos="absolute"
                style={{ width: `${progress}%` }}
            ></Box>
        </Box>
    )
}

export default ProgressBar
