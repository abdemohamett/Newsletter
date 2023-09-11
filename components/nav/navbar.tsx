'use client'

import { cn } from '@/lib/utils';
import { useParams, usePathname } from 'next/navigation';
import { Button } from '../ui/button';


export const Navbar = () => {
    // const params = useParams()
const pathname = usePathname()

 const navItems = [
  {
    name: "Home",
    slug: "/",
    active: pathname === '/',
  },
  {
    name: "Price",
    slug: "#price",
    active: pathname === '#price',

  },
  {
    name: "Features",
    slug: "#features",
    active: pathname === '#features',

  },
];
  return (
    <nav className='flex items-center border-b h-[70px] px-6 lg:px-28'>
        <h1 className='text-3xl font-bold text-balck hidden lg:block'>News<span className="text-indigo-400">letter</span></h1>
        <h1 className='text-3xl font-bold text-balck lg:hidden block'>N<span className="text-indigo-400">S</span></h1>

        <div className='ml-20 flex items-center gap-x-6'>
        {navItems.map((item) => (
            <ul key={item.name} className='lg:flex flex-row items-center space-x-8 hidden'>
              <li className={cn('cursor-pointer transition-colors hover:text-black ',
              item.active ? 'text-black' : 'text-muted-foreground'
              )}>{item.name}</li>
            </ul>
        ))}
        </div>

        <Button variant='primary' className="ml-auto text-white">
            Get Started!
        </Button>
    </nav>
  )
}
