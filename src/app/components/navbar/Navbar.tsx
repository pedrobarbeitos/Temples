import Link from 'next/link'
import React from 'react'
import './Navbar.scss'

type Props = {}

function Navbar({}: Props) {
  return (
    <div className='navbar'>
        <div className='navbarLeft'>
            <Link href='/'><strong>Temples</strong></Link>
            <Link href='/list'>Index</Link>
            <button className='search'>Search</button>
        </div>
        <div className='navbarRight'>
            <Link href='/shop'>Shop</Link>
            <Link href='/about'>About</Link>
        </div>
    </div>
  )
}

export default Navbar