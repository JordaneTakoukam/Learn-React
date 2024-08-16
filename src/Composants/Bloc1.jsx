import { InboxArrowDownIcon } from "@heroicons/react/24/outline";
import { user } from "../Pages/PageTdWithComponants";

function Bloc1() {
    return (
        <div>
            <div className="flex flex-col lg:flex-row justify-between gap-y-2">
                {/* gauche */}
                <div>
                    <h1 className="font-bold text-xl">Your profile</h1>
                    <p className="text-sm text-gray-400">Last edit on <span className="text-black font-bold">{user.last_edit_date}</span> </p>
                </div>

                {/* droite */}
                <div className="flex space-x-2 h-[35px]">
                    <button className="border border-black font-semibold rounded-lg px-2">
                        Discard
                    </button>

                    <button className="bg-indigo-500 text-white flex items-center justify-center gap-x-1 px-3
                                       rounded-lg">
                        <InboxArrowDownIcon className="h-5 w-5 " />
                        Save
                    </button>

                </div>
            </div>
        </div>
    )
}

export default Bloc1