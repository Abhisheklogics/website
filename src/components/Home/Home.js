
'use client'

import React, { useState,useEffect} from "react";

import Aos from "aos";
import 'aos/dist/aos.css';
import Link from "next/link";

import getData from "@/app/apiCall";

import dynamic from "next/dynamic";
const SimpleSlider =dynamic(()=>import('../slider/Slider'))
const RecentPosts=dynamic(()=>import('../recentPost/Recent'))
const Carousel =dynamic(()=>import('../Techslider/Techslider'))
const Footer=dynamic(()=>import('../Footer/Footer'))

  const Home1 =()=> {
   
 let [data,setdata]=useState([]);

 useEffect(() => {
  getData(`/api/experiments/Home`)
    .then((res) => setdata(res))
    .catch((err) => console.log(err));
}, []); 

  useEffect(() => {
    Aos.init({ duration: 2000 });
    
  }, []);

 
  return (
    <>
     
        <div className="xs:h-full
        xl:h-full">
       
            <SimpleSlider />
        
          <RecentPosts  image={data.arduinodata}/>
          <div  className=" hidden 2xl:block xl:h-[450px] xl:w-[200px] xl:bg-white xl:shadow-md xl:ml-[1280px] xl:mt-[-450px] xl:rounded-lg xl:absolute">
        <div className="xl:w-full xl:p-2 xl:text-white xl:h-10   md:bg-gradient-to-r from-green-700 "> 
          <h1 className="xl:font-bold">
            FOLLOW US
          </h1>
          <ul className="xl:text-black xl:mt-4 xl:grid xl:gap-12">
            <li>
            <img src="https://cdn-icons-png.flaticon.com/128/2168/2168281.png" className="xl:h-10 xl:mt-6 xl:ml-2"/>
            </li>
            <Link href={'https://www.facebook.com/'}>        
                <li className="xl:mt-[-80px] xl:ml-[60px]">
              Facebook
            </li>
            </Link>

           
            <li  className="xl:mt-[-50px]  xl:ml-2">
              <img src="https://cdn-icons-png.flaticon.com/128/15707/15707749.png" className="xl:h-10"/>
            </li>
            <Link href={''}>
            <li className=" xl:mt-[-90px] xl:ml-[60px]">
             Instagram
            </li>
            </Link>
            <li className="xl:mt-[-60px]  xl:ml-2">
              <img  src="https://cdn-icons-png.flaticon.com/128/733/733635.png" className="xl:h-10"/>
            </li>
            <li className=" xl:mt-[-100px] xl:ml-[60px]">
              Twitter
            </li>
            <li className="xl:mt-[-60px]  xl:ml-2"> 
              <img  src="https://cdn-icons-png.flaticon.com/128/174/174857.png" className="xl:h-10"/>
            </li>
            <Link href={'https://www.linkedin.com/feed/'}>
            <li className=" xl:mt-[-100px] xl:ml-[60px]">
              LinkedIn
            </li>
            </Link>
          </ul>
        </div>
          </div>
          <div data-aos='fade-left' className={`rounded mt-20 col-span-3 w-[350px]  p-3 text-black ml-6  md:ml-[540px]
         
          xl:rounded xl:mt-20 bg-green-700 col-span-3 xl:w-[450px] justify-center mx-auto relative text-center xl:p-3 xl:text-black`} >
            <div className=""><h1 className="  animate-typing overflow-hidden whitespace-nowrap border-r-2 border-r-white pr-5 
             text-2xl text-white font-light 
            md:animate-typing md:overflow-hidden md:whitespace-nowrap md:border-r-2 md:border-r-md:white md:pr-5 
            md:text-3xl md:text-white md:font-light md:ml-10 
            ">LATEST TECHNOLOGIES</h1></div>
          </div>

          <Carousel/>
          
        </div>
   <Footer/>
    </>
  );
}
 export default Home1