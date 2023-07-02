import {CustomButton} from "@/components";
import Link from "next/link";
import Image from 'next/image'
function Navbar() {
  return <header
    className='w-full absolute z-10'>
    <nav className={'max-w-[1440px] mx-auto flex justify-between px-6 sm:px-16 py-4 '}>
      <Link href={'/'} className={''}>
        <Image alt='Logo img' src={'/logo.svg'} width={118} height={18} className={'object-contain'}/>
      </Link>

      <CustomButton title='Home' classNameContainer='text-primary-blue bg-white rounded-full min-w-[13 0px]'/></nav>

  </header>;
};
export default Navbar