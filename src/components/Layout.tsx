import { Grid, GridItem } from '@chakra-ui/react'
import type { ReactElement } from 'react'
import Sidebar from './Sidebar'

function Layout({ children }: { children: ReactElement }) {
    return (
        <Grid templateColumns={'65px 1fr'} minH={'100vh'}>
            <Sidebar />
            <Grid
                templateColumns={{
                    sm: '1fr',
                    md: '1fr 350px',
                    xl: '1fr 400px',
                }}
                as={'main'}
            >
                {children}
            </Grid>
        </Grid>
    )
}
export default Layout
