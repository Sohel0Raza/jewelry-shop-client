import Footer from "../pages/shared/footer/Footer";
import Navbar from "../pages/shared/navbar/Navbar";
import { Outlet } from "react-router-dom"
const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="md:min-h-[calc(100vh-10px)]">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;