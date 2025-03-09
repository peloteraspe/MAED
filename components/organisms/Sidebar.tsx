'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface INavList {
  id: number;
  title: string;
  path: string;
  icon: string;
}

const Sidebar: React.FC<{ navList: INavList[] }> = ({ navList }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      className="w-full"
    >
      <aside
        className={`px-2 pb-8 flex cursor-pointer h-5/6 m-auto fixed inset-y-0 left-4 z-50 overflow-y-auto transition duration-300 transform bg-primary shadow-2xl rounded ${
          isOpen ? 'w-64' : 'w-16'
        }`}
        onMouseEnter={() => {
          setIsOpen(true);
        }}
        onMouseLeave={() => setIsOpen(false)}
      >
        <div className="flex flex-col gap-4 justify-start mt-8">
          <Image src="/assets/icons/Logo.svg" alt='logo' width={40} height={40} className='w-11 h-10' />
          {navList?.map((nav: any) => {
            return (
              <Link href={nav.path} key={nav.id}>
                <div className="flex flex-row items-end gap-4 p-2 hover:bg-primary-light hover:text-white w-full">
                  <div className="w-9 h-8">
                    <img src={nav.icon} alt={nav.title} className='w-full h-full' />
                  </div>
                  <span className="font-semibold text-white">
                    {nav.title}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
