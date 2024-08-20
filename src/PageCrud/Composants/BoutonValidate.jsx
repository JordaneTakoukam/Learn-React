import React from 'react'

function BoutonValidate({ title, icon, onClick, couleur }) {
    return (
        <button
            onClick={onClick}
            className='
            w-full
            text-white bg-green-900 flex items-center justify-center px-5 py-2 rounded   my-3 gap-x-2'>
            {icon} <p>{title}</p>
        </button>
    )
}

export default BoutonValidate