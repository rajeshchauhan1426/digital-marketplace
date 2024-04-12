export const PRODUCT_CATEGORIES =[
     {
        label : 'UI Kits',
        value : 'ui_kits ' as const,
        featured:[
        {
            name: 'editors picks',
            href: '#',
            imageSrc: '/nav/ui-Kits/mixed.jpg ',
        },
        {
            name: 'New arrivals',
            href: '#',
            imageSrc: '/nav/ui-Kits/blue.jpg ',
        },
        {
            name: 'Bestsellers',
            href: '#',
            imageSrc: '/nav/ui-Kits/purple.jpg ',
        },
        ],
     },
     {
        label : 'Icons',
        value : 'icons ' as const,
        featured:[
        {
            name: 'Favourite icon pack ',
            href: '#',
            imageSrc: '/nav/icons/picks.jpg',
        },
        {
            name: 'New arrivals',
            href: '#',
            imageSrc: '/nav/icons/new.jpg ',
        },
        {
            name: 'Bestsellers',
            href: '#',
            imageSrc: '/nav/icons/bestsellers.jpg ',
        },
        ],
     },
]