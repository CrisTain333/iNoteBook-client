import React from "react";
import getRelativeDateString from "../../helper/getRelativeTime";

// const date = new Date();
// // setInterval(() => {
// //     const time = getRelativeDateString(date);
// //     console.log(time);
// // }, 1000)

const NoteCard = ({ note }) => {
    const { title, content, userProfile, date } = note;
    return (
        <div className="shadow-md mx-10 bg-white rounded">
            <div className="w-full">
                {/* profile div  */}
                <div className="profile_Image">
                    <img src={userProfile} className="h-10 w-10" alt="" />

                </div>

            </div>
        </div>
    );
};

export default NoteCard;
