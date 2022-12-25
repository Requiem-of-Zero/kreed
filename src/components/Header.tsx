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
          src="https://lh3.googleusercontent.com/19-MEeOWLEOzMAPXq6QseV6WCm_MfsVEwqVneeqqxjXTdJDo0Yp35BPJbaE_P1yHQkL7JuXn0FEq-fbdaHzoPIBiepi-bY5ZxMdMn-tZfRF_nhwN4gTWT8hnsXi02_-QIcti52e1frDl3CocIVeqC49XeYad8-rIRnISZQwBodHsO6M_0tns0d3o3jWhKMFqXE6YL7amI7rGwt9Vnz7WKfdm4dGqoSfgw3euIIe9iNSAEtv5aQPoCjyfBt76LduCbZ2MRoQUIgEcnobTbhdOyIkRpL-z-ECXLMzwjEBcIdkh9yCThP0DktLzgDi9fLvqFHk8zinB7PV_iorYNlDJ3LLvm6HoIfNpuuzrtl7nkNuM9hL7Uyy4fNPMIKtSSD4Y3bPjVNTIvfmNldQxr8voGyBZ46qSjDYhTaqBGpnEzgtRbuXUIoNPCDq26Hb64Ult5A8R7jZIGOTo0_UAm6ln7oo2NeDk9p13rtbr-5bprdmqaMo5lnd5Mq0z2OUz1N0ZZtviFImwSvfGqhubyqIKWaKj-B4-aWdYCdTKGMHs8o1-QltUbFqXyaEm9SjphR_TYjp9f6Tf2r4vJdw7o8rmwy24N9CAk514wbwBIEE-W-OV-wipqgl4b9aYiWG2D6nwHkkIygEftVzBoldo2FTGXim4pd5BBT_t234hnXUJqX6gFH_I0AAUQjNK6HFAivq8Mrd50kFqN9ZJnPTyCD7RF1tz26ZW1N7xe8pxbiIDzF2NhabSu7Mwcow5hB6zBpPvrMnfBPSB2iUCFxsTy__-563Xtf07RHTkD-j2MxDrWY0WSFShM0SgPUjgCvZlTmJ-VxttG4FwO1D2r9S5ImJvP3CZEb7btsHeNOwkOyyr7hXYCoA2AlpH1KZA7fxJAlcEiepC49OWKzbNXakaKm8IhpSs0HKOIED5FhMRsInGjl1stKIobOm-9NuvRLQhohqtKEx7chjSiZxXIA=w1920-h1080-no?authuser=0"
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
            src="https://rb.gy/g1pwyx"
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