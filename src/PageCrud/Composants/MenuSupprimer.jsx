import React from 'react'
import TitreMenu from './TitreMenu'
import BoutonCustom from './BoutonCustom'
import { MdArrowBackIos, MdDelete } from 'react-icons/md'
import BoutonValidate from './BoutonValidate'

function MenuSupprimer({ backToHome, nomDuProduit, handleConfirmDelete }) {
    return (
        <div className='w-full'>
            <TitreMenu title={'Supprimer le produit'} />

            <BoutonCustom
                icon={<MdArrowBackIos />}
                title={'Back to home'}
                onClick={backToHome}
            />


            {/* input de modification */}
            <div className='py-10'>
                <h1>Voulez vous supprimer le produit : <span className='underline font-bold'>{nomDuProduit}</span></h1>

            </div>


            {/* Bouton de confirmation */}
            <BoutonValidate
                icon={<MdDelete />}
                onClick={() => handleConfirmDelete()}
                title={'Supprimer '}

            />
        </div>
    )
}

export default MenuSupprimer