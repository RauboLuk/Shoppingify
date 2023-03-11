import TopList from '@/components/TopList'
import { Grid } from '@chakra-ui/react'

const index = () => {
    return (
        <Grid height="fit-content">
            <TopList title="Top Items"/>
            <TopList title="Top Categories" barColor="cyan.400"/>
        </Grid>
    )
}

export default index
