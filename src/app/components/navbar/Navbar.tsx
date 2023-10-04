import Link from 'next/link'
import React from 'react'

const links = [
    {
        id:1,
        title:'Temples',
        url: '/',
    },
    {
        id:2,
        title:'List',
        url: '/list',
    },
    {
        id:3,
        title:'Shop',
        url: '/shop',
    },
    {
        id:4,
        title:'About',
        url: '/about',
    },
]


type Props = {}

function Navbar({}: Props) {
  return (
    <div>
        <Link href='/'>Temples</Link>
        <div>
            {links.map(link=>(
                <Link key={link.id} href={link.url}>
                    {link.title}
                </Link>
            ))}

        </div>
    </div>
  )
}

export default Navbar