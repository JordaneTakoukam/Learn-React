import React from 'react'

function BoutonCustom({ title, icon, onClick }) {
    return (
        <button
            onClick={onClick}
            className='text-white bg-green-900 flex items-center justify-center px-5 py-2 rounded absolute top-0 right-0 mx-10 my-3 gap-x-2'>
            {icon} <p>{title}</p>
        </button>
    )
}

export default BoutonCustom