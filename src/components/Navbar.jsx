import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () =>{
        setIsOpen(!isOpen)
    }

    return (
        <nav className="bg-green-600 text-white py-4 md:py-8">
            <div className="container mx-auto flex justify-between items-center">
                <h3>React practice</h3>

                {/*mobile menu bar*/}
                <div>
                    <button onClick={toggleMenu}>
                        {
                            isOpen ?  <IoClose /> : <FaBars />
                        }
                       
                        
                    </button>
                </div>

                <ul className="flex space-x-6 md:space-x-4">
                    <li>Home</li>
                    <li>Profucts</li>
                    <li>Blogs</li>
                    <li>Contact</li>
                    <li>About Us</li>
                </ul>

                <button>Login</button>
            </div>
        </nav>
    )
}

export default Navbar