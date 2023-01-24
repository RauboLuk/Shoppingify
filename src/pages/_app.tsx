import Layout from '@/components/Layout'
import theme from '@/theme'
import { ChakraProvider } from '@chakra-ui/react'
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
