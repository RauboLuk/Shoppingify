import { Box, Center, Heading, VStack } from '@chakra-ui/layout'
import {
    Button,
    Input,
    InputGroup,
    InputRightElement,
} from '@chakra-ui/react'
import { CartHeader } from './CartHeader'

function ShoppingList() {
    const items = [1]

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
        <Box
            h={'100vh'}
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'space-between'}
        >
            <VStack bg={'sh.backgroundSecondary'} p={{ base: 6 }} flex={1}>
                <CartHeader />

                {content}
            </VStack>
            <Box
                bg={'white'}
                h={{ base: 24, md: 28 }}
                display="flex"
                justifyContent={'center'}
                alignItems={'center'}
                hidden={false}
            >
                <InputGroup size="lg" width={72}>
                    <Input
                        pr="2.5rem"
                        type={'text'}
                        placeholder="Enter a name"
                        _focusVisible={{ borderColor: '#C1C1C4' }}
                    />
                    <InputRightElement width="4.5rem" >
                        <Button  size="md" height={'100%'} right={'-2px'}>
                            Save
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </Box>
        </Box>
    )
}

export default ShoppingList
