import React, { useState } from 'react'

export const NavbarWithSubmenu = () => {
    const [openSubmenu, setOpenSubmenu] = useState(null)

    const secondLevelFirst = [
        {
            id: 11,
            name: 'item_11',
            href: '#'
        },
        {
            id: 12,
            name: 'item_12',
            href: '#'
        },
        {
            id: 13,
            name: 'item_13',
            href: '#'
        },
        {
            id: 14,
            name: 'item_14',
            href: '#'
        },
    ]

    const firstLevel = [
        {
            id: 1,
            name: 'item_1',
            href: '#'
        },
        {
            id: 2,
            name: 'item_2',
            href: '#',
            submenu: secondLevelFirst // добавляем подменю ко второму элементу
        },
        {
            id: 3,
            name: 'item_3',
            href: '#'
        },
        // ... остальные элементы
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
