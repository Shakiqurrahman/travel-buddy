import React from "react";
import { FaRegUser } from "react-icons/fa6";


const Navbar = () => {
    return (
        <header className="h-24 flex justify-between items-center max-container">
            <h1 className="text-2xl font-semibold text-black">
                Travel <span className="text-[#30af5b]">Buddy.</span>
            </h1>
            <nav>
                <ul className="flex gap-20">
                    <li>Home</li>
                    <li>Services</li>
                    <li>Pricing</li>
                    <li>Contact Us</li>
                </ul>
            </nav>
            <button className="btn_black flex items-center gap-3">
                <FaRegUser className="font-thin text-[22px]"/>
                Login
            </button>
        </header>
    );
};

export default Navbar;
