import React from "react";
import { Link } from "react-router-dom";
import getRelativeDateString from "../../helper/getRelativeTime";
import "./noteCard.css"

// const date = new Date();
// // setInterval(() => {
// //     const time = getRelativeDateString(date);
// //     console.log(time);
// // }, 1000)

const NoteCard = ({ note }) => {
    const { title, content, userProfile, date, _id } = note;
    return (
        <Link to={`/note/${_id}`
        }>
            <div className="shadow-md mx-10 bg-white rounded hover:scale-105 transition-all cur duration-300">

                {/* Main Div  */}
                <div className="w-full">
                    {/* main Content  */}
                    <div className="p-3">
                        <div className="main_title">
                            <h2 className="text-xl font-semibold">{title}</h2>
                        </div>

                        <div className="mt-5">
                            <div className="content">
                                <p>{content?.slice(0, 40)} ....</p>
                            </div>
                        </div>
                    </div>

                    {/* Footer Div  */}
                    <div className="flex flex-col ">
                        {/* profile div  */}
                        {/* <div className="profile_Image_div  p-2">
                            <label className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full  ring ring-[#f5ba13] ring-offset-base-100 ring-offset-2">
                                    <img src={userProfile} />
                                </div>
                            </label>

                        </div> */}

                        {/* time Div  */}
                        <div className="added-time">
                            <div className="p-2 font-medium">
                                <p>{getRelativeDateString(date)}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default NoteCard;
