import {Props} from './index.types'
import Image from 'next/image'
import {footerLinks} from "@/constants";
import Link from "next/link";

export default function Footer(props: Props) {
  return <footer
    className={'flex flex-col text-black-100 border-t border-gray-100'}>
    <div className={'flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10'}>
      <div>
        <Image alt='logo image' src={'/logo.svg'} width={118} height={18} className={'object-contain'}/>
        <p className={'text-base text-gray-700 mt-10'}>
          Car hub <br/>
          Copyright 2023 </p>
      </div>
      <div className={'footer__links'}>
        {footerLinks.map((link) => {
          return <div key={link.title} className={'footer__link'}>
            <h3 className={'font-bold'}>{link.title}</h3>
            {link.links.map((link) => {
              return <Link href={link.url} key={link.title} className={'text-gray-500 text-base'}>{link.title}</Link>
            })}

          </div>
        })}

      </div>
    </div>

    <div className={'footer__copyrights justify-between'}>
      <div className={' flex flex-1 gap-5'}>
        <p className={'text-sm'}>@2023. All right reserved</p>
        <p className={'text-sm text-black-100'}>Copyright</p>
      </div>
      <div className={'flex text-sm text-gray-400 gap-5'}>
        <p>Privacy policy</p>
        <p>Terms of services</p>
      </div>
    </div>

  </footer>;
};
