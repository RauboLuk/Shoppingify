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
            fontWeight="600"
        >
            <GridItem>
                <Text fontSize="sm">{title}</Text>
            </GridItem>
            <GridItem pr="3">
                <Text fontSize="md" fontWeight="700">{value}%</Text>
            </GridItem>
            <GridItem gridColumn={'span 2'}>
                <ProgressBar progress={value} />
            </GridItem>
        </Grid>
    )
}

export default ItemPercentage
