import { UserIcon } from "@heroicons/react/24/outline";
import TitreProfile from "./SousComposant/TitreProfile";
import { useState } from "react";
import { user } from "../Pages/PageTdWithComponants";

function Bloc3() {
    const [nom, setNom] = useState(user.nom);
    const [prenom, setPrenom] = useState(user.prenom);


    return (
        <div>
            <div >

                <TitreProfile
                    icone={<UserIcon className="h-5 w-5 text-indigo-500" />}
                    titre={'Personal informations'}
                />

                <div className="flex mt-4 gap-x-5">
                    <div className="flex flex-col w-full gap-y-1">
                        {/* input 1 */}
                        <label className="font-bold">First Name</label>
                        <input
                            value={nom}

                            placeholder="Donald"
                            className="border border-gray-400 rounded px-2 py-2 font-semibold "
                        />
                    </div>

                    <div className="flex flex-col w-full gap-y-1">
                        {/* input 2 */}
                        <label className="font-bold">Last Name</label>
                        <input
                            value={prenom}
                            placeholder="Serge"
                            className="border border-gray-400 rounded px-2 py-2 font-semibold "

                        />
                    </div>
                </div>


            </div></div>
    )
}

export default Bloc3