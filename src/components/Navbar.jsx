import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";


const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () =>{
        setIsOpen(!isOpen)
    }

    return (
        <nav className="bg-green-800 text-white py-4 md:py-8 sticky top-0 z-10 border-b-3 border-green-400">
            <div className="container mx-auto flex justify-between items-center">
                <h3 className="text-xl font-bold">React practice</h3>

                {/*mobile menu bar*/}
                <div className="md:hidden">
                    <button onClick={toggleMenu}>
                        {
                            isOpen ?  <IoClose /> : <FaBars />
                        }
                       
                        
                    </button>
                    
                </div>

                <ul className="hidden md:flex space-x-4 md:space-x-6">
                    <li> <Link to={'/'} className="hover:text-green-400"> Home </Link> </li>
                    <li> <Link to={'products'} className="hover:text-green-400"> Profucts </Link> </li>
                    <li> <Link to={'blogs'} className="hover:text-green-400"> Blogs </Link> </li>
                    <li> <Link to={'contact'} className="hover:text-green-400"> Contact </Link> </li>
                    <li> <Link to={'about'} className="hover:text-green-400"> About Us </Link> </li>
                </ul>

                    <button className="hidden md:block bg-white text-black py-1 px-5 rounded cursor-pointer hover:bg-slate-400">Login</button>

                {/* Mobile menu collaps*/}
                <div className={`md:hidden w-full absolute bg-green-600 top-full left-0 ${isOpen ?
                 'block' : 'hidden'}`}>
                    <ul className="flex flex-col items-center py-4 space-y-3">
                    <li>Home</li>
                    <li>Profucts</li>
                    <li>Blogs</li>
                    <li>Contact</li>
                    <li>About Us</li>
                    <li>
                        <button className="bg-white text-black py-1 px-5 rounded cursor-pointer hover:bg-slate-400">Login</button>
                    </li>
                </ul>
                </div>
               
            </div>
        </nav>
    )
}

export default Navbar