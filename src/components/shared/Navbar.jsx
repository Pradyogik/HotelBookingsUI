import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Logo from "../../images/logo.svg";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="lg:px-16 px-4 bg-[#FD7E14] flex flex-wrap items-center py-4 shadow-md">
            <div className="flex-1 flex justify-between items-center">
                <Link to="/" className="flex font-Hindi items-center text-[#B01432] text-3xl  font-extrabold">
                    <img src={Logo} alt="Logo" className="mr-6" />
                    दिव्य अयोध्या
                </Link>
            </div>
            <label htmlFor="menu-toggle" className="pointer-cursor md:hidden block" onClick={toggleMenu}>
                <svg
                    className="fill-current text-gray-900"
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    viewBox="0 0 20 20"
                >
                    <title>menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
            </label>
            <input className="hidden" type="checkbox" id="menu-toggle" checked={isOpen} />
            <div className={`md:flex md:items-center md:w-auto w-full ${isOpen ? 'block' : 'hidden'}`} id="menu">
                <nav>
                    <ul className="md:flex items-center justify-between space-x-4 pr-16 text-2xl font-bold font-poppins text-[#263238] pt-4 md:pt-0">
                        <li>
                            <Link to="/tutorial/" className="md:p-4 py-3 px-0 block "> {/* Replace <a> with <Link> */}
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/services" className="md:p-4 py-3 px-0 block "> {/* Replace <a> with <Link> */}
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link to="/places" className="md:p-4 py-3 px-0 block "> {/* Replace <a> with <Link> */}
                                Contact
                            </Link>
                        </li>
                        <li>
                            <Link to="/buy-pass" className="md:p-4 py-3 px-0 block md:mb-0 mb-2 "> {/* Replace <a> with <Link> */}
                                Login
                            </Link>
                        </li>

                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;