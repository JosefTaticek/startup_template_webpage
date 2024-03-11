import React from 'react'
import Logo from "../img/logo.png";
import { Link } from 'react-router-dom'
const Footer = () => {
  return <div className="border-t border-gray-300 py-5">
    <div className="flex flex-row justify-between mx-4 items-center">
      <Link to="/"><img alt="XYYyY" src={Logo} className="h-10"></img></Link>
      <div className="space-x-4">
        <Link className="font-medium text-gray-500 hover:text-gray-900 transition-colors  cursor-pointer" href="#" to="/features">Features</Link>
        <Link className="font-medium text-gray-500 hover:text-gray-900 transition-colors  cursor-pointer" href="#" to="/references">References</Link>
        <Link className="font-medium text-gray-500 hover:text-gray-900 transition-colors cursor-pointer" href="#" to="/references">Get started</Link>
      </div>
    </div>
    <div className="flex flex-row justify-between py-4 mx-4 items-center">
      <div className="font-normal text-[14px] text-gray-500 hover:text-gray-900 transition-colors cursor-pointer">© 2023 Acme AI. All rights reserved.</div>
      <div className="space-x-4 flex flex-row">
        <div className="font-normal text-[14px] text-gray-500 hover:text-gray-900 transition-colors cursor-pointer">Terms of Service</div>
        <div className="font-normal text-[14px] text-gray-500 hover:text-gray-900 transition-color cursor-pointer">Privacy Policy</div>
      </div>
    </div>
  </div>
}

export default Footer