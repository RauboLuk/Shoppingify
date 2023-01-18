import { useRouter } from 'next/router'
import { Icon } from './Icon'
import { NavbarLink } from './NavbarLink'

const elements = [
    { href: '/items', src: '/menu_icon.svg', alt: 'items' },
    { href: '/history', src: '/refresh_icon.svg', alt: 'history' },
    {
        href: '/statistics',
        src: '/analytics_icon.svg',
        alt: 'statistics',
    },
]

export const NavbarList = () => {
    const { route } = useRouter()
    return (
        <>
            {elements.map((element) => (
                <NavbarLink
                    key={element.alt}
                    href={element.href}
                    active={element.href === route}
                >
                    <Icon {...element} />
                </NavbarLink>
            ))}
        </>
    )
}
