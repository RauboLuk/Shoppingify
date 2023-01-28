import { Box, Center, Heading, Stack, Text, VStack } from '@chakra-ui/layout'
import { Button, Card, Input, InputGroup, InputRightElement } from '@chakra-ui/react'

function ShoppingList() {
    const items = []

    const content =
        items.length > 0 ? (
            <Box>
                <Heading>Shopping list</Heading>
            </Box>
        ) : (
            <Center h={'full'} my={'auto'}>
                <Heading size={'md'}>No items</Heading>
            </Center>
        )

    return (
        <Box h={'100vh'} display={'flex'} flexDirection={'column'} justifyContent={'space-between'}>
            <VStack bg={'sh.backgroundSecondary'} p={{ base: 6 }} flex={1}>
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
                        <Text fontWeight={'bold'}>
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

                {content}
            </VStack>
            <Box bg={'white'} h={{ base: 24, md: 28}} display="flex" justifyContent={'center'} alignItems={'center'}>
                <InputGroup w={'200px'} h={'61px'}>
                    <Input size={'lg'} border={'2px'} placeholder="Enter a name" />
                    <InputRightElement>
                        <Button w={'87px'} h={'max-content'}>Save</Button>
                    </InputRightElement>
                </InputGroup>
                
            </Box>
        </Box>
    )
}

export default ShoppingList
