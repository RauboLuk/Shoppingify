import { Card, CardBody, Grid, Text } from '@chakra-ui/react'
import { Icon } from './Icon'

interface Props {
    name: string
}

export const ProductCard = ({ name }: Props) => {
    return (
        <Card w={{ base: 36, md: 48 }}>
            <CardBody px={4} py={3}>
                <Grid
                    templateColumns={'1fr 20px'}
                    alignItems={'center'}
                    gap={2}
                >
                    <Text>{name}</Text>
                    <Icon src={'/add_icon.svg'} alt={'items'} />
                </Grid>
            </CardBody>
        </Card>
    )
}
