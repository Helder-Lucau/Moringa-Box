import React, { useState } from "react";
import { Link } from "react-router-dom"
import logosimage from "../assets/logo.png";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

function Navbar() {

    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }
    return (
        <div className="flex justify-between items-center h-24 text-white mx-auto px-4 bg-[#1E232A]">
            <img className="w-20" src={logosimage} alt="logo" />
            <ul className="hidden md:flex">
                <li className="p-4">
                    <Link className="text-white" to="/">HOME</Link>
                </li>
                <li className="p-4">
                    <Link to="/about" className="text-white">ABOUT</Link>
                </li>
                <li className="p-4">
                    <Link to="/contact" className="text-white">CONTACT</Link>
                </li>
            </ul>
            <div onClick={handleNav} className="block md:hidden">
                {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>
            <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r-gray-900 bg-[#1E232A] ease-in-out duration-500' : 'fixed left-[-100%]'}>
                <img className="w-20 m-4" src={logosimage} alt="logo" />
                <ul className="p-4">
                    <li className="p-4 border-b border-gray-600 text-white">
                        <Link to="/" className="text-white">HOME</Link>
                    </li>
                    <li className="p-4 border-b border-gray-600">
                        <Link to="/about" className="text-white">ABOUT</Link>
                    </li>
                    <li className="p-4">
                        <Link to="/contact" className="text-white">CONTACT</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar