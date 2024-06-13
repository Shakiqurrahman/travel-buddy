import React from "react";

const Navbar = () => {
    return (
        <header className="h-20 flex justify-between items-center max-container">
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
            <button className="btn_black">
                Login
            </button>
        </header>
    );
};

export default Navbar;
