import React, { useState } from 'react'
import { MdAdd } from 'react-icons/md';
import MenuAjouter from './Composants/MenuAjouter';
import MenuAffichage from './Composants/MenuAffichage';


function ListProduit() {
    const [showAdd, setShowAdd] = useState(false);
    const [valeur1, setValeur1] = useState('');
    const [valeur2, setValeur2] = useState('');
    const [valeur3, setValeur3] = useState('');

    const handleAdd = () => {
        setShowAdd(true);
    }

    const handleBackToHome = () => {
        setShowAdd(false);
    }

    const handleCreerNewProduct = () => {
        if (!valeur1) {
            alert('Field Product tile is empty');
            return;
        }

        if (products.find(product => product.title === valeur1)) {
            alert(`Le produit "${valeur1}" existe déjà`);
            return;
        }


        setProducts(prev => [...prev, { title: valeur1 }]);
        setValeur1("");
        handleBackToHome();
    }




    const [products, setProducts] = useState([])


    return (
        <div className='max-w-full mx-auto flex  flex-col items-center'>


            <div className='bg-blue-200 min-w-[600px] flex flex-col items-start my-20 py-5 px-10 relative'>

                {
                    showAdd === false ?
                        <MenuAffichage
                            products={products}
                            onClick={handleAdd} /> :
                        <MenuAjouter
                            valeur1={valeur1}
                            valeur2={valeur2}
                            valeur3={valeur3}
                            setValeur1={setValeur1}
                            setValeur2={setValeur2}
                            setValeur3={setValeur3}
                            onClick={handleBackToHome}
                            handleCreerNewProduct={handleCreerNewProduct} />

                }

            </div>

        </div>
    )
}

export default ListProduit