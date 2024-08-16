import Bloc1 from "../Composants/Bloc1";
import Bloc2 from "../Composants/Bloc2";
import Bloc3 from "../Composants/Bloc3";

export const user = {
    nom: "Rihana",
    prenom: "Artiste",
    photo: "https://www.hindustantimes.com/ht-img/img/2023/05/26/550x309/ezgif-4-5e83476306_1685070528590_1685070540412.jpg",
    last_edit_date: "16 August 2024"
}

function PageTdWithComponants() {
    return (
        <div className=" max-w-3xl  mx-auto mt-10 p-8 rounded-xl border border-gray-400
         shadow-2xl space-y-14">

            {/* bloc1 */}
            <Bloc1 />


            {/* bloc 2 */}
            <Bloc2 />


            {/* bloc 3 */}
            <Bloc3 />

        </div>
    )
}


export default PageTdWithComponants;