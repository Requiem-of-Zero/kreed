import { BellIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY > 0){
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }
    window.addEventListener('scroll', handleScroll)

    return() => {
      window.removeEventListener('scroll', handleScroll)     
    }
},[])

  return (
    <header className={`${isScrolled && "bg-[#141414]"}`}>
      <div className="flex items-center space-x-2 md:space-x-10">
        <Image
          src="/../public/static/images/kreed_logo.png"
          width={100}
          height={100}
          className="cursor-pointer object-contain"
          alt="kreed homepage logo"
        />
        <ul className="hidden space-x-4 md:flex">
          <li className="header__link">Home</li>
          <li className="header__link">TV Shows</li>
          <li className="header__link">Movies</li>
          <li className="header__link">New & Popular</li>
          <li className="header__link">My List</li>
        </ul>
      </div>
      <div className="flex items-center space-x-4 text-sm font-light">
        <MagnifyingGlassIcon className="hidden h-6 w-6 sm:inline" />
        <p className="hidden lg:inline">Kids</p>
        <BellIcon className="h-6 w-6 sm:inline" />
        <Link href="/account">
          <Image
            src=""
            width={30}
            height={30}
            className="cursor-pointer rounded"
            alt="demo profile image"
          />
        </Link>
      </div>
    </header>
  );
}

export default Header