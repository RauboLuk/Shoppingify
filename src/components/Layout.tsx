import { Grid, GridItem } from '@chakra-ui/react'
import type { ReactElement } from 'react'
import Sidebar from './Sidebar'

function Layout({ children }: { children: ReactElement }) {
    return (
        <Grid templateColumns={'65px 1fr'} minH={'100vh'}>
            <Sidebar />
            <GridItem>
                <main>{children}</main>
            </GridItem>
        </Grid>
    )
}
export default Layout
