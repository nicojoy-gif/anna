
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-pink-500 p-4 shadow-md">
            <ul className="flex justify-center space-x-8">
                <li><Link to="/" className="text-white font-bold">Home</Link></li>
                <li><Link to="/reasons" className="text-white font-bold">Reasons I Love You</Link></li>
                <li><Link to="/how-we-met" className="text-white font-bold">How We Met</Link></li>
                <li><Link to="/gallery" className="text-white font-bold">Gallery</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
