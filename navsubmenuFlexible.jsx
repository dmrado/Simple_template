import React, { useState } from 'react'

export const NavbarWithSubmenu = () => {
    const [openSubmenu, setOpenSubmenu] = useState(null)

    const secondLevelFirst = [
        {
            id: 11,
            name: 'Производитель 1',
            href: '#'
        },
        {
            id: 12,
            name: 'Производитель 2',
            href: '#'
        },
        {
            id: 13,
            name: 'Производитель 3',
            href: '#'
        },
        {
            id: 14,
            name: 'Производитель 4',
            href: '#'
        },
    ]

    const firstLevel = [
        {
            id: 1,
            name: 'Главная',
            href: '#'
        },
        {
            id: 2,
            name: 'каталог',
            href: '#',
            submenu: secondLevelFirst // добавляем подменю ко второму элементу
        },
        {
            id: 3,
            name: 'производители',
            href: '#'
        },
        {
            id: 4,
            name: 'доставка и оплата',
            href: '#'
        },
        {
            id: 5,
            name: 'контакты',
            href: '#'
        },
    ]


    const handleSubmenuClick = (id) => {
        setOpenSubmenu(openSubmenu === id ? null : id)
    }

    return (
        <div>
            <ul className="ul">
                {firstLevel.map(item => (
                    <li key={item.id}>
                        <div onClick={() => handleSubmenuClick(item.id)}>
                            {item.name}
                        </div>
                        {item.submenu && openSubmenu === item.id && (
                            <ul className="submenu">
                                {item.submenu.map(subItem => (
                                    <li key={subItem.id}>
                                        {subItem.name}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    )
}
