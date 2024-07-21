import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const SideNavbar: React.FC = () => {
  return (
    <div className="flex z-[100]">
      <nav className="z-[100] fixed top-0 rounded-r-[50px] left-0 flex flex-col h-[70%] py-2 px-4 bg-white shadow-2xl overflow-auto">
        <ul className="flex flex-col divide-y text-center">
          <li className="py-6">
            <Link to="/">ICS</Link>
          </li>
          <li className="py-6">
            <Link to="/places">Places</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideNavbar;
