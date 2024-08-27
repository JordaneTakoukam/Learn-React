import React from 'react'
import { MdAdd, MdDelete, MdEdit } from 'react-icons/md'
import BoutonCustom from './BoutonCustom'
import BoutonAction from './BoutonAction'

function MenuAffichage({ products, onClick, handleModifier, handleSupprimer }) {
    return (
        <div className='w-full'>
            <h1 className='font-bold pb-5'> Produits Enregistrer : <span className='underline'>{products.length} produits </span></h1>
            {
                products.length == 0 ?
                    <div className='p-20 w-full flex items-center justify-center'>Aucun produit enregistrer pour le moment !</div>

                    : products.map((product, index) =>
                        <div key={index} className={`flex justify-between w-full ${products.length - 1 !== index && "border-b border-black "}  py-4`}>
                            <p> {product.title}</p>

                            <div className='flex items-center justify-center gap-2'>
                                <BoutonAction couleur={'bg-blue-500'} icone={<MdEdit />} onClick={() => { handleModifier(index) }} />
                                <BoutonAction couleur={'bg-red-500'} icone={<MdDelete />} onClick={() => { handleSupprimer(index) }} />

                            </div>
                        </div>
                    )
            }

            <BoutonCustom
                icon={<MdAdd />}

                title={'Ajouter un produit'}
                onClick={onClick}
            />


        </div>
    )
}

export default MenuAffichage