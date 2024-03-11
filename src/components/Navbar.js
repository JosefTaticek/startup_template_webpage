import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../img/logo.png";

const Navbar = () => {
  return <nav className="py-4 md:py-6">
   <div className="px-4'' md:px-6 flex items-center justify-between">
      <Link to="/"><img alt="XYYy" src={Logo} class=""></img></Link>
     <div className="flex flex-row justify-center items-center space-x-4">
        <nav className="flex space-x-4">
          
          <Link className="font-medium text-gray-500 hover:text-gray-900 transition-colors dark:text-gray-400 dark:hover:text-gray-50 cursor-pointer" href="#" to="/features">Features</Link>
          <Link className="font-medium text-gray-500 hover:text-gray-900 transition-colors dark:text-gray-400 dark:hover:text-gray-50 cursor-pointer" href="#" to="/references">References</Link>
        </nav>
        <Link className="font-medium text-gray-500 hover:text-gray-900 transition-colors dark:text-gray-400 dark:hover:text-gray-50 cursor-pointer" to="/signin">Sign in</Link>
        <Link className="flex justify-center items-center rounded-md py-4 bg-gray-900 px-4 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300" to="webapp">Get Started</Link>
     </div>
     
   </div>
 </nav> 
}
export default Navbar