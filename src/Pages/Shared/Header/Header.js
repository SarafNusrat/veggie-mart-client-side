import React from 'react';
import Home from '../../Home/Home';
import menuIcon from '../../../Images/menu-icon.png'

const Header = () => {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
        <div>
            <nav className="container flex flex-wrap justify-between items-center mx-auto px-2 py-3 relative bg-red-500 mb-3">
                    <div className="container mx-auto px-4 flex flex-wrap items-center justify-between">
                    <div className="w-full container flex flex-wrap justify-between items-center mx-auto relative">
                        <button
                        className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                        type="button"
                        onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                        <i className="fas fa-bars"></i>
                        <img src={menuIcon} alt=""></img>
                        </button>
                    </div>
                    <div
                        className={
                        "lg:flex flex-grow items-center" +
                        (navbarOpen ? " flex" : " hidden")
                        }
                        id="example-navbar-danger"
                    >
                        <ul className="flex flex-col lg:flex-row list-none lg:mx-auto lg:px-16">
                        <li className="nav-item ">
                            <a
                            className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                            href="#pablo"
                            >
                            <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Home</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                            className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                            href="#pablo"
                            >
                            <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Manage Inventory</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                            className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                            href="#pablo"
                            >
                            <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Add new Item</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                            className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                            href="#pablo"
                            >
                            <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Blogs</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                            className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                            href="#pablo"
                            >
                            <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Login</span>
                            </a>
                        </li>
                        </ul>
                    </div>
                    </div>
                </nav>
            <Home></Home>
        </div>
    );
};

export default Header;