import React, { useState } from 'react'
import { MdAdd } from 'react-icons/md';
import MenuAjouter from './Composants/MenuAjouter';
import MenuAffichage from './Composants/MenuAffichage';
import MenuModifier from './Composants/MenuModifier';
import createToast from "./../Composants/toast"
import MenuSupprimer from './Composants/MenuSupprimer';

function ListProduit() {
    const [action, setAction] = useState('afficher');
    const [valeur1, setValeur1] = useState('');
    const [valeur2, setValeur2] = useState('');
    const [valeur3, setValeur3] = useState('');

    const [productSelect, setProductSelect] = useState("");
    const [indexSelect, setIndexSelect] = useState(0);

    const handleAdd = () => {
        setAction('ajouter');
    }

    const handleModifier = (index) => {
        setProductSelect(products[index].title);
        setIndexSelect(index);
        setAction('modifier');
    }

    const handleSupprimer = (index) => {
        setProductSelect(products[index].title);
        setIndexSelect(index);

        setAction('supprimer');
    }

    const handleBackToHome = () => {
        setAction('afficher');
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
        setAction('afficher');

        createToast('Créer avec succès', 0)

    }

    const handleConfirmUpdate = () => {
        setProducts(products.map((product, index) => {
            return index === indexSelect
                ? { ...product, title: productSelect }  // Mettez à jour uniquement le titre
                : product;
        }));



        createToast('Modifier avec succès', 0);
        handleBackToHome();

    }

    const handleConfirmDelete = () => {
        setProducts(products.filter((_, index) => index !== indexSelect));

        createToast('Produit supprimé avec succès', 0);
        handleBackToHome();
    }





    // {title:"...", prix: ..., image:...}
    const [products, setProducts] = useState([])


    return (
        <div className='max-w-full mx-auto flex  flex-col items-center'>
            <div className='bg-blue-200 min-w-[600px] flex flex-col items-start my-20 py-5 px-10 relative'>

                {
                    action === 'afficher' ?
                        <MenuAffichage
                            products={products}
                            onClick={handleAdd}
                            handleModifier={handleModifier}
                            handleSupprimer={handleSupprimer}

                        /> :

                        action === 'ajouter' ?
                            <MenuAjouter
                                valeur1={valeur1}
                                valeur2={valeur2}
                                valeur3={valeur3}
                                setValeur1={setValeur1}
                                setValeur2={setValeur2}
                                setValeur3={setValeur3}
                                onClick={handleBackToHome}
                                handleCreerNewProduct={handleCreerNewProduct} />
                            :

                            action === "modifier" ?
                                <MenuModifier
                                    backToHome={handleBackToHome}
                                    productSelect={productSelect}
                                    setProductSelect={setProductSelect}
                                    handleConfirmUpdate={handleConfirmUpdate}
                                /> :

                                action === 'supprimer' ?
                                    <MenuSupprimer

                                        backToHome={handleBackToHome}
                                        nomDuProduit={productSelect}
                                        handleConfirmDelete={handleConfirmDelete} />



                                    :

                                    <div></div>




                }

            </div>

        </div>
    )
}

export default ListProduit