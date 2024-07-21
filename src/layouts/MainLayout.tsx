import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import SideNavbar from "../components/SideNavbar";

const MainLayout = () => {
  return (
    <>
        <SideNavbar/>
        <Navbar/>
        <Outlet/>
    </>
  )
}

export default MainLayout
