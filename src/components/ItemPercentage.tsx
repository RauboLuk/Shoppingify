import { Grid, GridItem, Text } from '@chakra-ui/react'
import React from 'react'
import ProgressBar from './ProgressBar'

interface Props {
    title: string
    value: number
}

const ItemPercentage = ({ title, value }: Props) => {
    return (
        <Grid
            gridTemplateColumns={'1fr full'}
            justifyContent="space-between"
            gap="3.5"
        >
            <GridItem>
                <Text fontSize="sm">{title}</Text>
            </GridItem>
            <GridItem pr="3">
                <Text fontSize="md">{value}%</Text>
            </GridItem>
            <GridItem gridColumn={'span 2'}>
                <ProgressBar progress={2} />
            </GridItem>
        </Grid>
    )
}

export default ItemPercentage
