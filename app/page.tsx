import {CustomFilter, Hero, SearchBar, CarCard} from "@/components";
import {getCars} from "@/utils";
import Image from 'next/image'
import {FilterType} from "@/types";
import {fuels, yearsOfProduction} from "@/constants";

export default async function Home({searchParams}: { searchParams: FilterType }) {
  const cars = await getCars(searchParams)
  const isCarsEmpty = !Array.isArray(cars) || !cars.length || !cars
  return (
    <main className="overflow-hidden">
      <Hero/>
      <div className='mt-12 padding-x max-width ' id='discover'>
        <div className=''>
          <h1 className='text-4xl font-extrabold'>Car catalogue:</h1>
          <p className={'font-medium mt-2'}>Explore the cars you might like</p>
        </div>
        <div className='home__filters'>
          <SearchBar/>
          <div className={'home__error-container'}>
            <CustomFilter title={'fuel'} options={fuels}/>
            <CustomFilter title={'year'} options={yearsOfProduction}/>
          </div>
        </div>
        {
          isCarsEmpty ? (
              <div className={'flex justify-center items-center home__error-container'}>Oops..No cars found</div>
            ) :
            <div className={'home__cars-wrapper'}>
              {cars.map((car, i) => (
                  <CarCard key={i} car={car}/>
                )
              )}
            </div>

        }
      </div>
    </main>
  )
}
