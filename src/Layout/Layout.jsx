import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import noteLogo from "../assets/keeps.png";
import todoLogo from "../assets/to-do-list.png";
import addNoteIcon from "../assets/sticky-notes.png"

const Layout = () => {
  const [selected, setSelected] = useState("My Notes");
  const sideContent = [
    { name: "My Notes", logo: noteLogo, link: "/" },
    { name: "Add Notes", logo: addNoteIcon, link: "/add-notes" },
    { name: "To Do", logo: todoLogo, link: "/to-dos" },
  ];

  return (
    <div className="">
      <Header />
      <div className="drawer drawer-mobile h-screen">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* <!-- Page content here --> */}

          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content space-y-5">
            {/* <!-- Sidebar content here --> */}
            {sideContent.map((e, i) => {
              return (
                <Link to={e.link} className="font-bold">
                  <li
                    key={i}
                    className={`rounded flex  justify-between ${selected === e.name
                      ? "bg-slate-100 text-black"
                      : " text-black"
                      }`}
                    onClick={() => setSelected(e.name)}
                  >
                    <div>
                      <span>
                        <img src={e.logo} className="h-8" alt="itemLogo" />
                      </span>
                      <span>  {e.name}</span>
                    </div>
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Layout;
