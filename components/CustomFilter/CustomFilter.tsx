'use client';
import {Props} from './index.types'
import {Fragment, useEffect, useState} from "react";
import {Listbox, Transition} from "@headlessui/react";
import Image from "next/image";
import {useRouter, useSearchParams} from "next/navigation";
import {getSearchParamsByType} from "@/utils/searchParams";

export default function CustomFilter(props: Props) {
  const {push} = useRouter()
  const [selectedOption, setSelectedOption] = useState(props.options[0])
  const searchParams = useSearchParams()

  const handleUpdateParams = (value: string) => {
    const newRelativePathQuery = getSearchParamsByType(props.title, value)
    localStorage.setItem('persistentScroll', window.scrollY.toString())

    push(newRelativePathQuery)
  }
  useEffect(() => {
    const persistentScroll = localStorage.getItem('persistentScroll')
    if (persistentScroll === null) return
    window.scrollTo({top: Number(persistentScroll)})
    if (Number(persistentScroll) === window.scrollY)
      localStorage.removeItem('persistentScroll')
  }, [searchParams])
  return <div className={'w-fit'}>
    <Listbox value={selectedOption}
             onChange={(e) => {
               setSelectedOption(e)
               handleUpdateParams(e.value)
             }}>
      <div className={'relative z-10 w-fit'}>
        <Listbox.Button
          className={'custom-filter__btn '}
        >
          <span className={'block  truncate'}>{selectedOption.title}</span>
          <Image src={'/chevron-up-down.svg'} alt='chevron image' width={20} height={20}
                 className={'ml-4 object-contain'}/>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave={'transition ease-in duration-100'}
          leaveFrom={'opacity-100'}
          leaveTo={'opacity-0'}
        >

          <Listbox.Options
            className={'absolute top-[40px] ui-open:z-20 bg-red-400 custom-filter__options'}>

            {props.options.map((option, i) => (
              <Listbox.Option
                key={option.title}
                value={option}
                className="ui-active:bg-blue-500 ui-active:text-white ui-not-active:bg-white ui-not-active:text-black"

              >
                {({selected, active}) => (
                  <span
                    className={`
                    w-full flex items-start justify-start px-4 py-2 select-none
                    ${selected ? 'font-bold' : ''} ${active ? 'bg-primary-blue text-white' : ''}`}> {option.title}</span>
                )}

              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>

      </div>

    </Listbox>
  </div>;
};
