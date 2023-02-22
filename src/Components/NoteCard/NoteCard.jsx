import React from 'react';

const NoteCard = () => {
    return (
        <div>
            <div class="px-4 sm:px-6 lg:px-5">
                <div
                    class="max-w-lg px-8 py-8 rounded-md shadow-lg bg-white"
                >
                    <div class=" flex items-center space-x-2">
                        <div class="flex flex-shrink-0 rounded-full border border-gray-200">
                            <img
                                class="w-8 h-8 object-cover rounded-full"
                                src="review.photo"
                                alt=""
                            />
                        </div>
                    </div>
                    <div class="mt-2 flex items-center space-x-2">

                        <span class="text-sm font-semibold leading-5 text-gray-900">Date</span>
                    </div>
                    <div class="space-y-1 mt-3">
                        <h3 class="font-semibold text-gray-800">
                            title
                        </h3>
                        <p class="text-sm font-medium leading-5 text-gray-600">
                            content
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default NoteCard;