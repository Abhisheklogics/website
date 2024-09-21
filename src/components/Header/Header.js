'use client'

import Link from 'next/link';
import Search from '../Search/Search';
import Image from 'next/image';
import image1 from '../../../public/images/arduino.svg';
import image2 from '../../../public/images/raspberyy.png';
import image3 from '../../../public/images/ram.png';
import image4 from '../../../public/images/drone.png';

export default function Header() {
  return (
    <>
      <Search />
      <div className="relative w-full bg-green-700 h-14 mt-6 md:w-full">
        <ul className="flex flex-nowrap md:flex-wrap items-center justify-start text-white text-sm overflow-x-auto   py-4">
          
          <li className="md:ml-2 mt-[-2px] ml-1">
            <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="24px">
              <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
            </svg>
          </li>
  
          <li className="flex-shrink-0 ">
            <Link href="/">
              <span className="cursor-pointer hover:text-black ">HOME</span>
            </Link>
          </li>   
          <li className="flex-shrink-0 ml-4 md:ml-4">
            <Image height={24} width={24} src={image1} alt="Arduino" />
          </li>
          <li className="flex-shrink-0 ml-1">
            <Link href="/arduino">
              <span className="cursor-pointer hover:text-black">ARDUINO</span>
            </Link>
          </li>

          <li className="flex-shrink-0 ml-4 md:ml-4">
            <Image height={24} width={20} src={image2} alt="Raspberry Pi" />
          </li>
          <li className="flex-shrink-0 ml-1 md:ml-1">
            <Link href="/raspberry">
              <span className="cursor-pointer hover:text-black">RASPBERRY Pi</span>
            </Link>
          </li>

          <li className="flex-shrink-0 ml-4 md:ml-4">
            <Link href="/esp">
              <span className="cursor-pointer hover:text-black">ESP32</span>
            </Link>
          </li>

          
          <li className="flex-shrink-0  md:block ml-4 md:ml-4">
            <Image height={24} width={24} src={image3} alt="Electronics" />
          </li>
          <li className="flex-shrink-0  md:block ml-1">
            <Link href="/electronics">
              <span className="cursor-pointer hover:text-black">ELECTRONICS</span>
            </Link>
          </li>

          <li className="flex-shrink-0  md:block ml-4 md:ml-4">
            <Image height={24} width={24} src={image4} alt="Drone" />
          </li>
          <li className="flex-shrink-0  md:block  ml-1">
            <Link href="/drone">
              <span className="cursor-pointer hover:text-black">DRONE</span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
