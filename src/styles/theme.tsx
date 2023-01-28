import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
    styles: {
        global: {
            body: {
                color: '#34333A',
            },
        },
    },
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
