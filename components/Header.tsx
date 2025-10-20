import { headers } from 'next/headers'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import NavItems from './NavItems'
import UserDropdown from './UserDropdown'

const Header = () => {
  return (
    <div>
      <header className='sticky top-0 header'>
        <div className='container header-wrapper'>
          <Link href='/' className='h-8 w-auto cursor-pointer'>
          <Image src = "/assets/icons/logo.svg" alt='Perstock Logo' width={120} height={100}/>
          </Link>
          <nav className='hidden sm:block'>
            <NavItems/>
          </nav>
          <UserDropdown/>
        </div>
      </header>
    </div>
  )
}

export default Header
