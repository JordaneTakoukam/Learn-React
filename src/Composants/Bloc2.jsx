import { PhotoIcon } from "@heroicons/react/24/outline";
import TitreProfile from "./SousComposant/TitreProfile";
import { user } from "../Pages/PageTdWithComponants";

function Bloc2() {
    return (
        <div>
            <div>

                <TitreProfile
                    icone={<PhotoIcon className="h-5 w-5 text-indigo-500" />}
                    titre={'Profile picture'}
                />

                <div className="flex items-center gap-x-5 mt-3">
                    {/* image */}
                    <div className="bg-black h-32 w-32 rounded-full">
                        <img
                            className="h-full w-full object-cover rounded-full"
                            src={user.photo}
                            alt="rihana" />
                    </div>




                    <div className="flex gap-x-2">
                        {/*  */}
                        <button className="bg-indigo-500 text-white rounded-lg px-4 py-2 font-semibold">
                            Change picture
                        </button>

                        <button className="text-red-600 border border-red-500 px-4 py-2 rounded-lg font-semibold">
                            Delete picture
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Bloc2