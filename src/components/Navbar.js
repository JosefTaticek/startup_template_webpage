import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../img/logo.png";

const Navbar = () => {
  return <nav className="py-4 md:py-4">
   <div className="px-4 md:px-4 flex items-center justify-between">
      <Link to="/"><img alt="XYYy" src={Logo} class=""></img></Link>
     <div className="flex flex-row justify-center items-center space-x-4">
        <nav className="flex space-x-4">
          <Link className="font-medium text-gray-500 hover:text-gray-900 transition-colors cursor-pointer" href="#" to="/features">Features</Link>
          <Link className="font-medium text-gray-500 hover:text-gray-900 transition-colors cursor-pointer" href="#" to="/references">References</Link>
          <Link className="font-medium text-gray-500 hover:text-gray-900 transition-colors cursor-pointer" href="#" to="/contact">Contact</Link>
        </nav>
        <a className="font-medium text-gray-500 hover:text-gray-900 transition-colors  cursor-pointer" to="/signin" href="https://www.seznam.cz/">Sign in</a>
        <a className="rounded-md py-4 bg-gray-900 px-4 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90" to="webapp" href="https://www.seznam.cz/">Get Started</a>
     </div>
     
   </div>
 </nav> 
}
export default Navbar