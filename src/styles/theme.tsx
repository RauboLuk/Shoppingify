import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
    fonts: {
        body: `'Quicksand', sans-serif`,
        heading: `'Quicksand', sans-serif`,
        mono: `'Quicksand', sans-serif`,
    },
    colors: {
        sh: {
            fontPrimary: '#34333A',
            fontSecondary: '#828282',
            backgroundPrimary: '#FAFAFE',
            backgroundSecondary: '#FFF0DE',
            backgroundNavbar: '#FFFFFF',
            orange: '#F9A109',
            blue: '#56CCF2',
        },
    },
})

export default theme
