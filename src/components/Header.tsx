import {
    Flex,
    Heading,
    Highlight,
    Input,
    InputGroup,
    InputLeftElement,
} from '@chakra-ui/react'
import { ChangeEvent } from 'react'
import { Icon } from './Icon'

interface Props {
    search: string
    handleSearchUpdate: (e: ChangeEvent<HTMLInputElement>) => void
}

export const Header = ({ search, handleSearchUpdate }: Props) => {
    return (
        <Flex
            wrap="wrap"
            justifyContent="space-between"
            rowGap={{ base: 6, md: 7 }}
            pb={{ base: 8, md: 12 }}
        >
            <Heading
                as="h1"
                size="lg"
                maxW="30rem"
                display={{ base: 'none', md: 'initial' }}
            >
                <Highlight query="Shoppingify" styles={{ color: 'orange.400' }}>
                    Shoppingify
                </Highlight>{' '}
                allows you take your shopping list wherever you go
            </Heading>
            <InputGroup maxW={{ base: 'initial', md: 72 }}>
                <InputLeftElement pointerEvents="none">
                    <Icon
                        src={'/search_icon.svg'}
                        alt="cart"
                        height={20}
                        width={20}
                    />
                </InputLeftElement>
                <Input
                    type="tel"
                    placeholder="search item"
                    value={search}
                    onChange={handleSearchUpdate}
                />
            </InputGroup>
        </Flex>
    )
}

export default Header
