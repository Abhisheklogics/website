import React from 'react';
import Slider from 'react-slick';
import Link from 'next/link';

export default function SimpleSlider() {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4, 
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    responsive: [
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 2, 
        },
      },
      {
        breakpoint: 290, 
        settings: {
          slidesToShow: 1, 
        },
      },
    ],
  };

  return (
    <Slider className='mt-10 bg-gray-800 h-[270px] 
      md:mt-10 md:bg-gray-800 md:h-[300px]' {...settings}>
      
     
      <div className='md:mt-8 mt-14'>
        <div className="h-[170px] w-[150px] bg-gray-100 p-2 shadow-lg
        md:h-[240px] md:w-72 md:bg-gray-100 md:shadow-lg md:rounded md:flex md:flex-col md:justify-center md:items-center md:p-4 md:mx-4">
          <Link href={'/esp'}>
            <img className="w-fit h-fit  mt-4
              md:w-60 md:h-fit" src='https://wokwi.com/images/homepage/esp32.svg' alt="ESP" />
            <p className='text-center mt-6 bg-gray-200 p-1 hover:bg-blue-700 hover:text-white active:bg-gray-900
              md:text-center md:mt-4 md:bg-gray-200 md:p-1 md:hover:bg-blue-700 md:hover:text-white md:active:bg-gray-900'>
              ESP
            </p>
          </Link>
        </div>
      </div>
      
     
      <div className='md:mt-8  mt-14'>
        <div className="h-[170px] w-[150px] bg-gray-100 p-2 
        md:h-[240px] md:w-72 md:bg-gray-100 shadow-lg rounded flex flex-col justify-center items-center p-4 mx-4">
          <Link href="/arduino">
            <img className="w-fit h-fit md:w-72 md:h-fit" src='https://wokwi.com/images/homepage/arduino-uno.svg' alt="Arduino" />
            <p className='text-center mt-6 bg-gray-200 p-1 hover:bg-blue-700 hover:text-white active:bg-gray-900
              md:text-center md:mt-4 md:bg-gray-200 md:p-1 md:hover:bg-blue-700 md:hover:text-white md:active:bg-gray-900'>
              Arduino
            </p>
          </Link>
        </div>
      </div>
      
      
      <div className='md:mt-8  mt-14'>
        <div className="h-[170px] w-[150px] bg-gray-100 p-2 
        md:h-[240px] md:w-72 bg-gray-100 shadow-lg rounded flex flex-col justify-center items-center p-4 mx-4">
          <Link href={'/drone'}>
            <img className="w-fit h-fit md:w-72 md:h-[130px]" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF8_KmwrC7d19mtC3lk2IACxLHZnO5rAjDKw&s' alt="Drone" />
            <p className='text-center mt-6 bg-gray-200 p-1 hover:bg-blue-700 hover:text-white active:bg-gray-900
              md:text-center md:mt-4 md:bg-gray-200 md:p-1 md:hover:bg-blue-700 md:hover:text-white md:active:bg-gray-900'>
              Drone
            </p>
          </Link>
        </div>
      </div>
      
      
      <div className='md:mt-8  mt-14'>
        <div className="h-[170px] w-[150px] bg-gray-100 p-2 
        md:h-[240px] md:w-72 bg-gray-100 shadow-lg rounded flex flex-col justify-center items-center p-4 mx-4">
          <Link href={'/raspberry'}>
            <img className="w-60 h-fit md:w-72 md:h-fit" src='https://wokwi.com/images/homepage/pi-pico.svg' alt="Raspberry Pi" />
            <p className='text-center mt-6 bg-gray-200 p-1 hover:bg-blue-700 hover:text-white active:bg-gray-900
              md:text-center md:mt-4 md:bg-gray-200 md:p-1 md:hover:bg-blue-700 md:hover:text-white md:active:bg-gray-900'>
              Raspberry Pi
            </p>
          </Link>
        </div>
      </div>
      
    </Slider>
  );
}
