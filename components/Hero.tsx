'use client'
import React from 'react';
import Image from 'next/image'
import {CustomButton} from "@/components/index";

function Hero() {
  const handleScroll = () => {}
  return (
    <div className='hero'>
      <div className='flex-1 pt-36 padding-x'>
        <h1 className='hero__title'>
          Find, book or rent a car -- quickly and easily
        </h1>
        <p className='hero__subtitle'>
          We are the best car rental company in the world, with over 1 million
        </p>
        <CustomButton
          title={'Book now'}
          handleClick={handleScroll}
          classNameContainer='bg-primary-blue text-white rounded-full mt-10'
        />
      </div>
      <div className='hero__image-container'>
        <div className='hero__image'>
          <Image src={'/hero.png'} alt='Image hero' fill className='object-contain'/>
        </div>
        <div className={'hero__image-overlay'}/>
      </div>
    </div>
  );
}

export default Hero;