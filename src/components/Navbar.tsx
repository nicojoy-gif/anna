import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-pink-500 p-4 shadow-md">
            <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    {/* Logo or brand name */}
                    <div className="flex items-center">
                        <Link to="/" className="text-white font-bold text-xl">My Love</Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="sm:hidden">
                        <button 
                            onClick={toggleMenu} 
                            className="text-white focus:outline-none"
                            aria-label="Toggle Navigation"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden sm:flex space-x-8">
                        <ul className="flex space-x-8">
                            <li><Link to="/" className="text-white font-bold hover:text-pink-200">Home</Link></li>
                            <li><Link to="/reasons" className="text-white font-bold hover:text-pink-200">Reasons I Love You</Link></li>
                            <li><Link to="/how-we-met" className="text-white font-bold hover:text-pink-200">How We Met</Link></li>
                            <li><Link to="/gallery" className="text-white font-bold hover:text-pink-200">Gallery</Link></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Mobile Menu - Toggles when isOpen is true */}
            <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden`}>
                <ul className="flex flex-col items-start space-y-4 p-4 bg-pink-500 text-white">
                    <li><Link to="/" className="font-bold hover:text-pink-200">Home</Link></li>
                    <li><Link to="/reasons" className="font-bold hover:text-pink-200">Reasons I Love You</Link></li>
                    <li><Link to="/how-we-met" className="font-bold hover:text-pink-200">How We Met</Link></li>
                    <li><Link to="/gallery" className="font-bold hover:text-pink-200">Gallery</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
