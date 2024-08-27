import React from 'react'
import TitreMenu from './TitreMenu'
import BoutonCustom from './BoutonCustom'
import { MdArrowBackIos, MdEdit, MdUpdate } from 'react-icons/md'
import InputCustom from './InputCustom'
import BoutonValidate from './BoutonValidate'

function MenuModifier({ backToHome, productSelect, setProductSelect, handleConfirmUpdate }) {
    return (
        <div className='w-full'>
            <TitreMenu title={'Modifier le produit'} />

            <BoutonCustom
                icon={<MdArrowBackIos />}
                title={'Back to home'}
                onClick={backToHome}
            />


            {/* input de modification */}
            <div className='py-10'>
                <InputCustom
                    placeholder={'Title of your product'}
                    label={"Product title"}
                    value={productSelect}
                    setValue={setProductSelect}

                />
            </div>



            {/* Bouton de confirmation */}
            <BoutonValidate
                icon={<MdEdit />}
                onClick={() => handleConfirmUpdate()}
                title={'Modifier '}

            />
        </div>
    )
}

export default MenuModifier