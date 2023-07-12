import { Outlet } from 'react-router-dom';
import Navbar from "./Navbar";
import Footer from "./Footer";


const LayoutRouter = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default LayoutRouter