import React from 'react'
import TitreMenu from './TitreMenu'
import BoutonCustom from './BoutonCustom'
import { RxArrowBottomLeft } from 'react-icons/rx'
import { MdAdd, MdArrowBackIos } from 'react-icons/md'
import InputCustom from './InputCustom'
import BoutonValidate from './BoutonValidate'

function MenuAjouter({
    onClick,
    valeur1,
    valeur2,
    valeur3,
    setValeur1,
    setValeur2,
    setValeur3,
    handleCreerNewProduct
}) {
    return (
        <div className='w-full'>
            <TitreMenu title={'Add new product'} />

            <BoutonCustom
                icon={<MdArrowBackIos />}
                title={'Back to home'}
                onClick={onClick}
            />


            <div className='py-10'>
                <InputCustom
                    placeholder={'Title of your product'}
                    label={"Product title"}
                    value={valeur1}
                    setValue={setValeur1}

                />
            </div>




            <BoutonValidate
                icon={<MdAdd />}
                onClick={() => handleCreerNewProduct()}
                title={'Confirm '}

            />

        </div>
    )
}

export default MenuAjouter