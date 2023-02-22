import React, { useContext, useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";
import "./note.css";
import { AuthContext } from "../../Context/AuthProvider";
import { getUser } from "../../helper/getUser";

const CreateNote = (props) => {
  const [isExpanded, setExpanded] = useState(false);
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
    setExpanded(false);
  };

  return (
    <div className="w-[90%] lg:w-3/4 mx-auto">
      <form className="create-note relative" onSubmit={handleSubmit}>
        <input name="title" placeholder="Title" />
        <textarea
          name="content"
          className="mt-3"
          placeholder="Take a note..."
          rows={5}
        />

        <button className=" bg-[#f5ba13] text-white px-3 py-2 rounded">Add Note</button>
      </form>
    </div>
  );
};

export default CreateNote;
