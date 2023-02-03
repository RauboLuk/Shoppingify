import { Box, Button, Card, Stack, Text } from "@chakra-ui/react"

export const CartHeader = () => {
    return (
        <Card
        width={{ base: 72, lg: 80 }}
        height={{ base: 28, lg: 32 }}
        bg={'#80485B'}
        color={'white'}
        direction={'row'}
    >
        <Box w={28}>
            <Box
                w={12}
                h={28}
                bg={'orange.200'}
                style={{ transform: 'rotate(-15deg)' }}
                mx={'auto'}
            ></Box>
        </Box>
        <Stack my={'auto'} pl={26}>
            <Text
             fontWeight={'bold'}>
                Didn`t find what you need?
            </Text>
            <Button
                mt={'unset'}
                variant="solid"
                backgroundColor={'white'}
                color={'sh.fontPrimary'}
                borderRadius={'xl'}
                w={{ base: 28 }}
            >
                Add item
            </Button>
        </Stack>
    </Card>
    )
}