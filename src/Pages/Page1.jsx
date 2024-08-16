import React from 'react'
import { useNavigate } from 'react-router-dom'

function Page1() {

    const navigate = useNavigate();

    return (
        <div className='w-screen h-screen flex  flex-col items-center 
        justify-center '>
            <h1 className='text-[30px] font-bold underline mb-10'>PAGE 1</h1>

            <div className='border border-black p-20 rounded flex  gap-x-5'>
                <button
                    onClick={() => {
                        navigate("/page-2");
                    }}
                    className='bg-blue-800 text-white px-4 py-2 rounded-lg'>
                    Aller a la page 2
                </button>

                <button
                    onClick={() => {
                        navigate("/page-3");
                    }}
                    className='bg-blue-800 text-white px-4 py-2 rounded-lg'>
                    Aller a la page 3
                </button>
            </div>

        </div>
    )
}

export default Page1