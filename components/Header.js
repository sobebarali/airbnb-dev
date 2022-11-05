import Image from 'next/image'
import React from 'react'
import { SearchIcon, GlobeAltIcon, MenuIcon, UserCircleIcon, UsersIcon } from '@heroicons/react/solid'


const Header = () => {
  return (
    <div className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-5 px-5 md:px-10">

        {/* left */}
        <div className='relative flex items-center h-10 cursor-pointer my-auto'>
            <Image src="https://links.papareact.com/qd3" fill alt='logo' className="object-contain object-left" />
        </div>

        {/* Middle */}
        <div className='flex items-center md:border-2 rounded-full py-2 md:shadow-sm '>
            <input className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400" type="text" placeholder="Start your search" />
            <SearchIcon className='hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2' />
        </div>

        {/* Right */}
        <div className='flex items-center space-x-4 justify-end text-gray-500'>
            <p className="hidden md:inline cursor-pointer">Become a host</p>
            <GlobeAltIcon className='h-6 cursor-pointer' />
            <div className='flex items-center space-x-2 bottom-2 p-2 rounded-full'>
                <MenuIcon className='h-6' />
                <UserCircleIcon className='h-6' />
            </div>
        </div>
    </div>
    
  )
}

export default Header