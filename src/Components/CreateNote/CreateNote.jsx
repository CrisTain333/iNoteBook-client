import React, { useContext, useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";
import "./note.css";
import { AuthContext } from "../../Context/AuthProvider";
import { getUser } from "../../helper/getUser";
import toast, { Toaster } from 'react-hot-toast';
import { Audio } from 'react-loader-spinner'
const CreateNote = () => {
  const [loading, setLoading] = useState(false)
  const [userInfo, setUserInfo] = useState("");
  const { user } = useContext(AuthContext)

  useEffect(() => {
    const getUserInfo = async () => {
      const userInformation = await getUser(user.email);
      setUserInfo(userInformation);
    }
    getUserInfo()
  }, [user])
  console.log(userInfo)


  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const content = form.content.value;
    const userEmail = userInfo?.email;
    const userProfile = userInfo?.profilePicture
    const note = {
      title, content, userEmail, userProfile
    }
    fetch("http://localhost:8000/api/v1/note", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(note)
    })
      .then(res => res.json())
      .then(message => {
        if (message.status === 200) {
          toast.success('Notes Saved');
        }

      })

    form.reset()

  };

  return (
    <div className="w-[90%] lg:w-3/4 mx-auto">
      <Toaster></Toaster>
      <form className="create-note relative" onSubmit={handleSubmit}>
        <input name="title" placeholder="Title" />
        <textarea
          name="content"
          className="mt-3"
          placeholder="Take a note..."
          rows={5}
        />

        <button className="bg-[#f5ba13] text-white px-3 py-2 rounded" type="submit">Add Note</button>
      </form>
    </div>
  );
};

export default CreateNote;
