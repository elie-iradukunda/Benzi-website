import React from 'react'
import favicon from '../assets/favicon.ico'

const Header = () => {
  return (
    <>
    <div>
        <div className='bg-black text-white flex justify-around p-5 items-center'>
            <nav className='flex space-x-9'>
            <span>Deutisch</span>
            <hr />|
                <span>English</span>
                <span>Providers / privacy</span>
            </nav>
            <div>
<img src={favicon} alt="benzi logo" />
            </div>

            <div className='flex p-1 items-center space-x-6'>
                <input type="text" placeholder='search' className='bg-blue-300 w-64 rounded-md text-center'/>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>

                <span className='flex space-x-7'>Login <svg className='w-5' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg>
</span>
            </div>
        </div>
    </div>


    <div>
        <div>
            <nav className='bg-zinc-950 text-white flex space-x-9 justify-center p-4'>
                <span className='cursor-pointer'>Vehicles</span>
                <span  className='cursor-pointer'>Art & culture</span>
                <span  className='cursor-pointer'>Sustainability</span>
                <span  className='cursor-pointer'>Design</span>
                <span  className='cursor-pointer'>Innovation</span>
                <span  className='cursor-pointer'>Exlusive</span>
            </nav>
        </div>
    </div>
    </>
  )
}

export default Header
