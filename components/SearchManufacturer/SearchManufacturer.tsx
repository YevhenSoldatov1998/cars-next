'use client';
import {Props} from './index.types'
import {Combobox, Transition} from "@headlessui/react";
import Image from "next/image";
import React, {useState, Fragment} from "react";
import {manufacturers} from "@/constants";

export default function SearchManufacturer(props: Props) {
  console.log(props)
  const [query, setQuery] = useState('')
  const filteredManufacturers =
    query === ''
      ? manufacturers
      : manufacturers.filter((m) =>
        m.replace(/\s+/g, '')
          .toLowerCase()
          .includes(
            query.replace(/\s+/g, '').toLowerCase()
          ))

  return <div className={'search-manufacturer'}>
    <Combobox value={props.manufacturer} onChange={props.setManufacturer}>
      <div className={'w-full relative'}>
        <Combobox.Button className={'absolute top-[18px]'}>
          <Image src={'/car-logo.svg'} alt='car logo' width={20} height={20} className={'ml-4'}/>
        </Combobox.Button>
        <Combobox.Input
          placeholder={'Volkswagen'}
          displayValue={(manufacturer: string) => manufacturer}
          onChange={(event) => setQuery(event.target.value)}
          className={'w-full bg-gray-100 py-4 pr-4 pl-12'}/>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          afterLeave={() => setQuery('')}
        >
          <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {filteredManufacturers.length === 0 && query !== '' ? (
              <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                Nothing found.
              </div>
            ) : (
              filteredManufacturers.map((manufacture) => (
                <Combobox.Option
                  key={manufacture}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? 'bg-primary-blue text-white' : 'text-gray-900'
                    }`
                  }
                  value={manufacture}
                >
                  {({ selected, active }) => (
                    <>
                        <span
                          className={`block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                          }`}
                        >
                          {manufacture}
                        </span>
                      {selected ? (
                        <span
                          className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                            active ? 'text-white' : 'text-teal-600'
                          }`}
                        >
                          </span>
                      ) : null}
                    </>
                  )}
                </Combobox.Option>
              ))
            )}
          </Combobox.Options>
        </Transition>
      </div>
    </Combobox>
  </div>;
};
