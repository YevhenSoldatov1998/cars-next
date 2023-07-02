'use client'
import Image from "next/image";
import {CarDetails, CustomButton} from "@/components";
import {useState} from "react";
import {Car} from "@/types";

export default function CarCard({car}: { car: Car }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className={'relative bg-gray-100 car-card group cursor-pointer'}>
      <div className='car-card__content'>
        <h2 className='car-card__content-title'>{car.make} {car.model}</h2>

      </div>
      <p className='text-gray-400'>{car.class}</p>
      <p className={'font-bold'}>{car.year}</p>
      <div className={'car-card__image'}>
        <Image src={'/hero.png'} fill className={'object-contain'} alt='car'/>
      </div>
      <div className='w-full relative group-hover:invisible flex justify-between'>
        <div className={'flex flex-col justify-center items-center gap-2'}>
          <Image src={'/steering-wheel.svg'} width={20} height={20} alt='steering wheel img'/>
          <p className={'text-sm text-gray-800 font-bold'}>{car.transmission === 'a' ? 'Automatic' : 'Manual'}</p>
        </div>
        <div className={'flex flex-col justify-center items-center gap-2'}>
          <Image src={'/tire.svg'} width={20} height={20} alt='tire img'/>
          <p className={'text-sm text-gray-800 font-bold'}>{car.drive.toUpperCase()}</p>

        </div>
        <div className={'flex flex-col justify-center items-center gap-2'}>
          <Image src={'/gas.svg'} width={20} height={20} alt='gas img'/>
          <p className={'text-sm text-gray-800 font-bold'}>{car.city_mpg} MPG</p>

        </div>
      </div>
      <div className={'car-card__btn-container right-0 left-0'}>
        <CustomButton
          classNameContainer='bg-primary-blue w-full box-border text-white rounded-b-3xl'
          title='Book now' handleClick={()=> setIsOpen(true)}/>
      </div>
      {isOpen && <CarDetails
        car={car}
        closeModal={() => setIsOpen(false)}
        isOpen={isOpen}/>}
    </div>
  )
}