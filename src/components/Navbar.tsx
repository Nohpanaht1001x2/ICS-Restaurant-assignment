import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <div className="main-blue flex sticky top-0 z-[2]">
      <nav className="z-[2] ml-32 mr-12 h-[5rem] flex items-center justify-end w-[90%]">
        <ul className="flex flex-row gap-5">
          <li>
            <Link to="/">Bell</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
