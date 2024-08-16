import React from 'react'
import { Link } from 'react-router-dom'

function Page3() {
    return (
        <div className='w-screen h-screen flex  flex-col items-center 
        justify-center '>

            <h1 className='text-[30px] font-bold underline mb-10'>PAGE 3</h1>

            <div className='border border-black p-20 rounded flex  gap-x-5'>

                <Link
                    to={'/page-1'}
                    className='bg-blue-800 text-white px-4 py-2 rounded-lg'>
                    Aller a la page 1
                </Link>

                <Link
                    to={'/page-2'}
                    className='bg-blue-800 text-white px-4 py-2 rounded-lg'>
                    Aller a la page 2
                </Link>
            </div>
        </div>
    )
}

export default Page3