import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import './slide.css';

function Navbar() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);
    
    return (
        <>
   <div className="bg-purple-600 text-gray-50 flex justify-between md:hidden">
      <a className="text-white flex items-center space-x-2 block p-4">
         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-wallet" viewBox="0 0 16 16">
            <path d="M0 3a2 2 0 0 1 2-2h13.5a.5.5 0 0 1 0 1H15v2a1 1 0 0 1 1 1v8.5a1.5 1.5 0 0 1-1.5 1.5h-12A2.5 2.5 0 0 1 0 12.5V3zm1 1.732V12.5A1.5 1.5 0 0 0 2.5 14h12a.5.5 0 0 0 .5-.5V5H2a1.99 1.99 0 0 1-1-.268zM1 3a1 1 0 0 0 1 1h12V2H2a1 1 0 0 0-1 1z"/>
         </svg>
         <span className="text-white font-bold">SAVEO</span>
      </a>
      <div class="grid grid-cols-3">
      <button  className="mobile-menu-button animate-wiggle p-4 focus:outline-none focus:bg-purple-700">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-app-indicator" viewBox="0 0 16 16">
  <path d="M5.5 2A3.5 3.5 0 0 0 2 5.5v5A3.5 3.5 0 0 0 5.5 14h5a3.5 3.5 0 0 0 3.5-3.5V8a.5.5 0 0 1 1 0v2.5a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 1 10.5v-5A4.5 4.5 0 0 1 5.5 1H8a.5.5 0 0 1 0 1H5.5z"/>
  <path d="M16 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
</svg>
      </button>

      <button  className="mobile-menu-button p-4 focus:outline-none focus:bg-purple-700">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
      </svg>
      </button>
      <button onClick={showSidebar} className="mobile-menu-button p-4 focus:outline-none focus:bg-purple-700">
      <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
         </svg>
      </button>
      </div>
   </div>
<div className={`z-10 sidebar bg-purple-800 text-blue-100 ${sidebar ? '' : ' -translate-x-full'} w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform md:relative md:translate-x-0 transition duration-200 ease-in-out`}>
<a href="#" className="text-white flex items-center space-x-3 px-4">
   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-wallet w-5 h-5" viewBox="0 0 16 16">
      <path d="M0 3a2 2 0 0 1 2-2h13.5a.5.5 0 0 1 0 1H15v2a1 1 0 0 1 1 1v8.5a1.5 1.5 0 0 1-1.5 1.5h-12A2.5 2.5 0 0 1 0 12.5V3zm1 1.732V12.5A1.5 1.5 0 0 0 2.5 14h12a.5.5 0 0 0 .5-.5V5H2a1.99 1.99 0 0 1-1-.268zM1 3a1 1 0 0 0 1 1h12V2H2a1 1 0 0 0-1 1z"/>
   </svg>
   <span className="text-2xl font-extrabold">SAVEO</span>
</a>

<nav>
   <Link to='/saveo' onClick={showSidebar} className="block py-2.5 px-4 rounded transition duration-200 hover:bg-purple-700 hover:text-white">
   Home
   </Link>
   <Link to='/comapnies' onClick={showSidebar} className="block py-2.5 px-4 rounded transition duration-200 hover:bg-purple-700 hover:text-white">
   500+ comapnies
   </Link>
   <Link to="/offer" onClick={showSidebar} className="block py-2.5 px-4 rounded transition duration-200 hover:bg-purple-700 hover:text-white">
   special offer
   </Link>
   <Link to="pastorder" onClick={showSidebar} className="block py-2.5 px-4 rounded transition duration-200 hover:bg-purple-700 hover:text-white">
   Past Order
   </Link>
</nav>
</div>
<div className="bg-purple-600">
   <div className="container mx-auto px-3 pb-2">
      <span className={` ${sidebar ? "hidden" : ""} absolute z-10 py-3 pl-3 w-8 bg-transparent rounded text-base font-normal text-gray-400 text-center flex items-center justify-center`}>
         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
         </svg>
      </span>
      <input id="search" name="search" type="text" placeholder="search for Products, Brands and More" required  className="text-sm pl-10 w-full border border-gray-300 px-3 py-2 rounded-sm shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-green-500" />
   </div>
</div>
        </>
    )
}

export default Navbar
