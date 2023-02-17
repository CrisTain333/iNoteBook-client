import { useEffect } from "react";
import { useLocation, Navigate } from "react-router-dom";
import CreateNote from "../../Components/CreateNote/CreateNote";
import Notes from "../../Components/Notes/Notes";

const Home = () => {
  return (
    <div>
      <CreateNote />
      <div className="w-[90%] mx-auto mt-10 ">
        <Notes />
      </div>
    </div>
  );
};

export default Home;
