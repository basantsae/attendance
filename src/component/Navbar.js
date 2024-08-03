import React from "react";
import { useState, useEffect } from "react";


function Navbar({ onUserName }) {
    const [showUserInfo, setShowUserInfo] = useState(false);
    const [userName, setUserName] = useState("Administrator");

  useEffect(() => {
    // Pass the username to the parent component
    onUserName(userName);
  }, [userName, onUserName]);


    const toggleUserInfo = () => {
        setShowUserInfo(!showUserInfo);
      };
    
      // const userName = "Administrator";
      const userImage = "https://afl.muliatech.web.id/uploads/xdefault-user.png.pagespeed.ic.QpAVnuG4kz.webp"; // User image URL
    
  return (
    <>
    <nav
        className="bg-gray-800 px-4 py-3 flex justify-between"
        style={{ height: "60px", width: "100%" }}
    >
        <div className="flex items-center text-xl">
            <span className="text-white font-semibold">Attendance App</span>
        </div>
    {/* <button>
        <div className="user-panel flex items-center justify-center">
            <div className="image">
            <img
                src="https://afl.muliatech.web.id/uploads/xdefault-user.png.pagespeed.ic.QpAVnuG4kz.webp"
                className="rounded-full shadow-lg"
                style={{ width: 30, height: 30 }}
                alt="UserImage"
            />
            </div>
            <div className="info ml-3">
            <a href="/#" className="block text-white font-weight-bolder">
                Administrator
            </a>
            </div>
        </div>
    </button> */}

<div className="relative" style={{display:"flex",alignItems:"center"}}>
        <button onClick={toggleUserInfo} className="p-2 rounded-md">
          <div className="user-panel flex items-center justify-center">
            <div className="image">
              <img
                src={userImage}
                className="rounded-full shadow-lg"
                style={{ width: 30, height: 30,boxShadow: '0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)' }}
                alt="UserImage"
              />
            </div>
            <div className="info ml-3">
              <a href="/#" className="block text-white font-weight-bolder">
                {userName}
              </a>
            </div>
          </div>
        </button>
        {showUserInfo && (
          <div className="absolute top-12 right-0 bg-white border rounded-lg p-4 shadow-lg" style={{ width: 280 }}>
            <div style={{display:"flex",alignItems:"center",flexDirection: "column"}}>
              <img
                src={userImage}
                className="rounded-full shadow-lg"
                style={{ width: 72, height: 72 }}
                alt="UserImage"
              />
              <div className="ml-3">
                <p>Hi, {userName}</p>
                <button className="mt-2 p-2 bg-red-500 text-white rounded-md" onClick={() => alert('Logged out')}>
                  Log Out
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

    </nav>
    </>
);
}

export default Navbar;
