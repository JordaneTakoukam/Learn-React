import React from 'react'

function BoutonAction({ icone, onClick, couleur }) {
    return (
        <button
    
            onClick={onClick}
            className={`${couleur} text-white p-2 rounded`}>
            {icone}
        </button>
    )
}

export default BoutonAction