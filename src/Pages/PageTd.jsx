import { InboxArrowDownIcon } from "@heroicons/react/24/outline";
import { PhotoIcon } from "@heroicons/react/24/outline";
import { UserIcon } from "@heroicons/react/24/outline";





function PageTd() {
    return (
        <div className=" max-w-3xl  mx-auto mt-10 p-8 rounded-xl border border-gray-400
         shadow-2xl space-y-14">

            {/* bloc1 */}
            <div className="flex justify-between">
                {/* gauche */}
                <div>
                    <h1 className="font-bold text-xl">Your profile</h1>
                    <p className="text-sm text-gray-400">Last edit on <span className="text-black font-bold">12 Febuary 2024</span> </p>

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



            {/* bloc 2 */}
            <div>
                <div className="flex  items-center gap-x-1">
                    <PhotoIcon className="h-5 w-5 text-indigo-500" />
                    <p className="font-bold">Profile picture</p>
                </div>

                <div className="flex items-center gap-x-5 mt-3">
                    {/* image */}
                    <div className="bg-black h-32 w-32 rounded-full">
                        <img
                            className="h-full w-full object-cover rounded-full"
                            src="https://www.hindustantimes.com/ht-img/img/2023/05/26/550x309/ezgif-4-5e83476306_1685070528590_1685070540412.jpg"
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


            {/* bloc 3 */}
            <div >
                <div className="flex  items-center gap-x-1">
                    <UserIcon className="h-5 w-5 text-indigo-500" />
                    <p className="font-bold">Personal informations</p>
                </div>


                <div className="flex mt-4 gap-x-5">
                    <div className="flex flex-col w-full gap-y-1">
                        {/* input 1 */}
                        <label className="font-bold">First Name</label>
                        <input

                            placeholder="Donald"
                            className="border border-gray-400 rounded px-2 py-2 font-semibold "
                        />
                    </div>

                    <div className="flex flex-col w-full gap-y-1">
                        {/* input 2 */}
                        <label className="font-bold">Last Name</label>
                        <input placeholder="Serge"
                            className="border border-gray-400 rounded px-2 py-2 font-semibold "

                        />
                    </div>
                </div>


            </div>
        </div>
    )
}


export default PageTd;