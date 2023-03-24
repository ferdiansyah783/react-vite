import clsx from 'clsx'
import React from 'react'

const MainLayout = () => {
  return (
    <div className='w-full h-screen flex bg-white font-poppins'>
        <nav className='w-[290px] h-full border-r'>
          <div className='h-24 flex justify-center items-center border-b'>
            <h1 className='text-2xl text-gray-600'>front<b className='text-black'>store</b></h1>
          </div>
          <div className='px-5 py-3'>
            <h2 className='font-bold'>Category</h2>
            <div className='px-5 py-2 text-sm text-gray-500'>
              {['T-shirt', 'Sweter', 'Dress', 'Swimsuit', 'Jacket', 'Stuff and Accessories'].map((value, index) => (
                <p key={index} className={clsx('py-1.5', value === 'Dress' ? 'text-indigo-500 font-semibold' : '')}>{value}</p>
              ))}
            </div>
          </div>
          <div className='px-5 py-3'>
            <h2 className='font-bold'>Filter by:</h2>
            
          </div>
        </nav>
        <div className='w-full h-full'>
          <header className='w-full h-24 border-b'>

          </header>
        </div>
    </div>
  )
}

export default MainLayout