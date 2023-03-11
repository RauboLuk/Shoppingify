import TopList from '@/components/TopList'
import { Grid } from '@chakra-ui/react'

const index = () => {
    return (
        <Grid height="fit-content">
            <TopList title="Top Items" />
            <TopList title="Top Categories" />
        </Grid>
    )
}

export default index
