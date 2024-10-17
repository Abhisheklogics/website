'use client';

import React, { useEffect } from 'react';
import Slider from 'react-slick';
import Link from 'next/link';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import image1 from '../../../public/images/Bristo.jpg';
import image2 from '../../../public/images/DC.png1722415499430.png';
import image3 from '../../../public/images/DHT11.png';
import image4 from '../../../public/images/Pic 1.png';
import image5 from '../../../public/images/led.png';
import image6 from '../../../public/images/Servo.png';
import image7 from '../../../public/images/hr.jpg';
import image8 from '../../../public/images/icon.png';

const SimpleSlider = () => {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);

  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className="absolute top-[50%] right-4 h-8 w-8 md:h-8 md:w-10 transform -translate-y-1/2 text-white bg-gray-800 bg-opacity-50 p-2 rounded-full cursor-pointer hover:bg-opacity-100 md:h-10 md:w-10 md:p-2"
        style={{ zIndex: 1 }}
        onClick={onClick}
      >
        <div className="ml-2 font-bold md:ml-[10px] md:mt-[3px]">
          <Image width={10} height={10} src={image8} alt="Next" />
        </div>
      </div>
    );
  };

  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className="absolute top-[50%] left-4 h-8 w-8   md:h-8 md:w-10 transform -translate-y-1/2 text-white bg-gray-800 bg-opacity-50 p-2 rounded-full cursor-pointer hover:bg-opacity-100 md:h-10 md:w-10 md:p-2"
        style={{ zIndex: 1 }}
        onClick={onClick}
      >
        <div className="md:ml-[6px] ml-[2px]   font-bold md:mt-[3px]">
          <Image className="-scale-125" width={8} height={10} src={image8} alt="Prev" />
        </div>
      </div>
    );
  };

  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, 
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    swipeToSlide: true, 
    responsive: [
      {
        breakpoint: 768, 
        settings: {
          autoplay: false, 
          swipeToSlide: true, 
        },
      },
    ],
  };

  return (
    <Slider
      className="relative mt-8 w-[90vw] h-fit mx-auto md:w-[800px] md:h-fit md:mx-auto md:ml-4"
      {...settings}
    >
      <div className="bg-gray-400 shadow-lg rounded-lg overflow-hidden">
        <Link href={`/arduino/${9}`} passHref>
          <Image
            src={image1}
            alt="Arduino"
            layout="responsive"
            width={800}
            height={450}
            className="object-cover"
          />
        </Link>
      </div>
      <div className="bg-gray-400 shadow-lg rounded-lg overflow-hidden">
        <Link href={`/arduino/${2}`} passHref>
          <Image
            src={image2}
            alt="Raspberry Pi"
            layout="responsive"
            width={800}
            height={450}
            className="object-cover"
          />
        </Link>
      </div>
      <div className="bg-gray-400 shadow-lg rounded-lg overflow-hidden">
        <Link href={`/arduino/${17}`} passHref>
          <Image
            src={image3}
            alt="DHT11 Sensor"
            layout="responsive"
            width={800}
            height={450}
            className="object-cover"
          />
        </Link>
      </div>
      <div className="bg-gray-400 shadow-lg rounded-lg overflow-hidden">
        <Link href={`/arduino/${10}`} passHref>
          <Image
            src={image4}
            alt="Pic 1"
            layout="responsive"
            width={800}
            height={450}
            className="object-cover"
          />
        </Link>
      </div>
      <div className="bg-gray-400 shadow-lg rounded-lg overflow-hidden">
        <Link href={`/arduino/${11}`} passHref>
          <Image
            src={image5}
            alt="LED"
            layout="responsive"
            width={800}
            height={450}
            className="object-cover"
          />
        </Link>
      </div>
      <div className="bg-gray-400 shadow-lg rounded-lg overflow-hidden">
        <Link href={`/esp`} passHref>
          <Image
            src={image6}
            alt="Servo"
            layout="responsive"
            width={800}
            height={450}
            className="object-cover"
          />
        </Link>
      </div>
    </Slider>
  );
};

export default SimpleSlider;
