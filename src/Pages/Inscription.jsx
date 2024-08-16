import { useState } from "react"

export function Inscription() {
    
    const [nom, setNom] = useState("");
    const [erreurNom, setErreurNom] = useState("");

    const [email, setEmail] = useState("");
    const [motDePasse, setMotDePasse] = useState("");

    const soumettre = () => {
        setErreurNom("");

        if (!nom) {
            setErreurNom('Veuillez renseigner votre nom');
            return;
        }
        // alert("Nom = " + nom + "Email = " + email + "Mot de passe = " + motDePasse)

        // if (!(motDePasse.length >= 8 && motDePasse.length <= 16)) {
        //     alert("Le mot de passe doit .... !");
        //     return;
        // }

        // alert('Success');

    }

    function add() { }

    return <div>

        {/* <h1 className=" text-[14px] text-red-500 font-semibold underline ">Hello world</h1> */}

        {/* <button className="h-5 px-6 bg-blue-700 text-white text-[10px] rounded-sm  ">
        S'inscrire
      </button> */}

        {/* navbar */}
        <div className="bg-white  w-[250px] mx-auto flex flex-col justify-center items-center
                      mt-[50px] py-[5px] rounded-lg gap-y-4 
                      border border-black
                      ">

            <h1 className="font-semibold">Inscription</h1>

            <div className="flex flex-col items-start">
                {/* Nom */}
                <label className="text-[10px]">Entrez votre nom</label>
                <input
                    value={nom}
                    onChange={(value) => {
                        setErreurNom('');

                        var currentValue = value.target.value;
                        setNom(currentValue);

                        if (currentValue.length < 1) {
                            setErreurNom('Veuillez renseigner votre nom');
                        } else {
                            setErreurNom('');

                        }

                    }}
                    placeholder="Nom"
                    className="border border-black rounded-sm px-2 h-[20px] text-[10px]" />
                {
                    erreurNom ? <p className="text-red-500 text-[10px]">{erreurNom}</p> : <p></p>
                }


                {/* ADRESSE EMAIL */}
                <label className="text-[10px] mt-3">Entrez votre adresse mail</label>
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Adresse mail"
                    className="border border-black rounded-sm px-2 h-[20px] text-[10px]" />

                {/* MOT DE PASSE */}
                <label className="text-[10px] mt-3">Entrez votre mot de passe</label>
                <input
                    value={motDePasse}
                    onChange={(e) => setMotDePasse(e.target.value)}
                    type="password"
                    placeholder="Mot de passe"
                    className="border border-black rounded-sm px-2 h-[20px] text-[10px]" />


                <button
                    onClick={() => { soumettre() }}
                    className="bg-blue-900 w-full mt-[10px] rounded-sm text-white text-[11px] py-1">S'inscrire</button>
            </div>






            <input className="" />
        </div>

    </div>
}