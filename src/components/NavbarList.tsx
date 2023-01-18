import { Icon } from './Icon'
import { NavbarLink } from './NavbarLink'

const elements = [
    { href: '/items', src: '/menu_icon.svg', alt: 'items', active: false },
    { href: '/history', src: '/refresh_icon.svg', alt: 'history', active: true },
    {
        href: '/statistics',
        src: '/analytics_icon.svg',
        alt: 'statistics',
        active: false,
    },
]

export const NavbarList = () => {
    return (
        <>
            {elements.map((element) => (
                <NavbarLink key={element.alt} href={element.href} active={element.active}>
                    <Icon {...element} />
                </NavbarLink>
            ))}
        </>
    )
}
