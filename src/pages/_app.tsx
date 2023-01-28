import Layout from '@/components/Layout'
import theme from '@/styles/theme'
import { ChakraProvider } from '@chakra-ui/react'
import '@fontsource/quicksand/300.css'
import '@fontsource/quicksand/400.css'
import '@fontsource/quicksand/500.css'
import '@fontsource/quicksand/600.css'
import '@fontsource/quicksand/700.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'

export default function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter()
    console.log('router', router)
    return (
        <ChakraProvider theme={theme}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ChakraProvider>
    )
}
