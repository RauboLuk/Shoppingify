import { Icon } from './Icon'

const elements = [
    { src: '/menu_icon.svg', alt: 'items' },
    { src: '/refresh_icon.svg', alt: 'history' },
    { src: '/analytics_icon.svg', alt: 'statistics' },
]

export const NavbarList = () => {
    return (
        <>
            {elements.map((element, idx) => (
                <Icon key={idx} {...element} />
            ))}
        </>
    )
}
