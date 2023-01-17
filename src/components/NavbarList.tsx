import { Icon } from './Icon'
import { NavbarLink } from './NavbarLink'

const elements = [
    { src: '/menu_icon.svg', alt: 'items', active: false },
    { src: '/refresh_icon.svg', alt: 'history', active: true },
    { src: '/analytics_icon.svg', alt: 'statistics', active: false },
]

export const NavbarList = () => {
    return (
        <>
            {elements.map((element, idx) => (
                <NavbarLink href="/" active={element.active}>
                    <Icon key={idx} {...element} />
                </NavbarLink>
            ))}
        </>
    )
}
