import React from "react";
import getRelativeDateString from "../../helper/getRelativeTime";

// const date = new Date();
// // setInterval(() => {
// //     const time = getRelativeDateString(date);
// //     console.log(time);
// // }, 1000)

const NoteCard = ({ note }) => {
    console.log(note);
    const { title, content, userProfile, date } = note;
    return (
        <div>
            <div class="px-4 sm:px-6 lg:px-5">
                <div class="w-full px-8 py-8 rounded-md shadow-lg bg-white">
                    <div class=" flex items-center space-x-2">
                        <div class="flex flex-shrink-0 rounded-full border border-gray-200">
                            <img
                                class="w-8 h-8 object-cover rounded-full"
                                src={userProfile}
                                alt=""
                            />
                        </div>
                    </div>
                    <div class="space-y-1 mt-3 h-24">
                        <h3 class="font-semibold text-gray-800">{title}</h3>
                        <p class="text-sm font-medium leading-5text-gray-600 h-24">
                            {content}
                        </p>
                    </div>

                    <div class="mt-2 flex items-center space-x-2 justify-between ">
                        <button className="bg-[#fcc631] text-white px-3 py-1 rounded transition-all duration-500 hover:scale-110">
                            View
                        </button>
                        <span class="text-sm font-semibold leading-5 text-gray-900">
                            {getRelativeDateString(date)}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NoteCard;
