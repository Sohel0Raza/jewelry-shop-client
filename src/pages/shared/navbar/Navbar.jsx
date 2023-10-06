import logo from "../../../assets/Black_Gold_White_Elegant_Gold___Jewelry_Shop_Logo__1_-removebg-preview.png"
import { NavLink, Link } from "react-router-dom"
const Navbar = () => {
    const user = false
    const navItem = <>
        <NavLink to="/" className={({ isActive }) => isActive ? "active" : "default"}>
            Home
        </NavLink>
        <NavLink to="/allJewelry" className={({ isActive }) => isActive ? "active" : "default"}>
            All Jewelry
        </NavLink>
        <NavLink to="/myJewelry" className={({ isActive }) => isActive ? "active" : "default"}>
            My Jewelry
        </NavLink>
        <NavLink to="/addJewelry" className={({ isActive }) => isActive ? "active" : "default"}>
            Add Jewelry
        </NavLink>
        <NavLink to="/blogs" className={({ isActive }) => isActive ? "active" : "default"}>
            Blogs
        </NavLink>
    </>
    return (
        <div className="md:w-10/12 mx-auto">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navItem}
                        </ul>
                    </div>
                    <div className="flex items-center">
                        <h2 className="text-2xl uppercase tracking-widest text-[#CCAF77] hover:text-black duration-1000">Sparkle
                        </h2>
                        <div className="h-12 w-9 flex items-center">
                            <img className="h-full w-full mx-1" src={logo} alt="" />
                            <span className="text-2xl uppercase hover:text-[#CCAF77] duration-1000">Gems</span>
                        </div>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-6">
                        {navItem}
                    </ul>
                </div>
                <div className="navbar-end">

                    <div className="ml-5">
                        {user ? (
                            <>
                                <div className="flex justify-between items-center">
                                    <div className="h-7 w-7 mr-3 tooltip tooltip-left tooltip-primary"
                                        data-tip={user.displayName}>
                                        <img
                                            className="h-full w-full rounded-full"
                                            src={user?.photoURL}
                                            alt=""
                                        />
                                    </div>
                                    <button className="">
                                        SIGN OUT
                                    </button>
                                </div>
                            </>
                        ) : (
                            <>
                                <Link to="/login">
                                    <button className="tracking-wider border-[1px] border-[#CCAF77] px-3 py-1">Login</button>
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;