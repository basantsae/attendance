import {MoreVertical } from "lucide-react";
// import logo from "../assets/logo.png"
// import profile from "../assets/profile.png"
import { createContext, useContext, useState } from "react";

const SidebarContext = createContext();

export default function Sidebar({ children }) {
  const [expanded, setExpanded] = useState(true);

  const MenuIcon = () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 6H20M4 12H20M4 18H20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
  return (
    <>
      <aside className="h-screen">
        <nav className="h-full flex flex-col border-r shadow-sm">
          <div className="p-4 pb-2 flex justify-between items-center bg-gray-800">
          {expanded && (
            <div className="flex justify-center items-center bg-gray-800 gap-1">
            <img
            src="https://afl.muliatech.web.id/img/xlogo.png.pagespeed.ic.TmJe1NYsoE.webp"
            className="rounded-full shadow-lg"
              style={{width:36,height:36}}
            alt=""
          />
              <span className="brand-text font-bold text-white">
                Attendance FR
              </span>
            </div>
            )
            }
            <button
              onClick={() => setExpanded((curr) => !curr)}
              className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
            >
              {/* {expanded ? <ChevronFirst /> : <ChevronLast />} */}
              <MenuIcon />
            </button>
          </div>
  {expanded && 
    // <div className="user-panel mt-3 mb-3 flex items-center justify-center">
    <div className="user-panel mt-3 mb-3 ml-3 flex items-center">
      <div className="image">
        <img
          src="https://afl.muliatech.web.id/uploads/xdefault-user.png.pagespeed.ic.QpAVnuG4kz.webp"
          className="rounded-full shadow-lg"
          style={{width:50,height:50}}
          alt="UserImage"
        />
      </div>
      <div className="info ml-3">
        <a href="/#" className="block text-black font-weight-bolder">
          Administrator
        </a>
      </div>
    </div>
    }
          <hr style={{color:"white"}}/>

          <SidebarContext.Provider value={{ expanded }}>
            <ul className="flex-1 px-3">{children}</ul>
          </SidebarContext.Provider>

          <div className="border-t flex p-3">
            <img src="/#" alt="" />
            <div
              className={`flex justify-between items-center overflow-hidden transition-all ${
                expanded ? "w-52 ml-3" : "w-0"
              } `}
            >
              <div className="leading-4">
                <h4 className="font-semibold">constGenius</h4>
                <span className="text-xs text-gray-600">
                  constgenius@gmail.com
                </span>
              </div>
              <MoreVertical size={20} />
            </div>
          </div>
        </nav>
      </aside>
    </>
  );
}

export function SidebarItem({ icon, text, active, alert ,arrow,onClick }) {
  const { expanded } = useContext(SidebarContext);

  return (
    <li
      className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${
        active
          ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
          : "hover:bg-indigo-50 text-gray-600"
      }`}
      onClick={onClick}
    >
      {icon}
      <span
        className={`overflow-hidden transition-all ${
          expanded ? "w-52 ml-3" : "w-0"
        }`}
      >
        {text}
      </span>
      {alert && (
        <div
          className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${
            expanded ? "" : "top-2"
          }`}
        ></div>
      )}

      {!expanded && (
        <div
          className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-indigo-100 text-indigo-800 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}
        >
          {text}
        </div>
      )}
       {expanded && (
        <div>
          {arrow}
        </div>
      )}
    </li>
  );
}
