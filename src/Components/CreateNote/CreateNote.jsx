import React, { useContext, useEffect, useState } from "react";
import "./note.css";
import { AuthContext } from "../../Context/AuthProvider";
import { getUser } from "../../helper/getUser";
import toast, { Toaster } from 'react-hot-toast';
import SmallLoader from "../SmallLoader/SmallLoader";
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
  console.log(userInfo);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true)
    const form = e.target;
    const title = form.title.value;
    const content = form.content.value;
    const userEmail = userInfo?.data?.email;
    const userProfile = userInfo?.data?.profilePicture
    const date = new Date()
    const note = {
      title, content, userEmail, userProfile, date
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
          setLoading(false)
        }

      })
    setLoading(false)
    form.reset()

  };

  return (
    <div className="w-[90%] lg:w-3/4 mx-auto">
      <Toaster></Toaster>
      <form className="create-note relative" onSubmit={handleSubmit}>
        <input name="title" placeholder="Title" required />
        <textarea
          required
          name="content"
          className="mt-3"
          placeholder="Take a note..."
          rows={5}
        />

        <button className={`bg-[#f5ba13] text-white px-3 py-2 rounded ${loading && "cursor-not-allowed"}`} type="submit">{loading ? <SmallLoader /> : `Add Note`}</button>
      </form>
    </div>
  );
};

export default CreateNote; 
