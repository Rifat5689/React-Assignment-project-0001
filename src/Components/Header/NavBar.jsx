import React from 'react';

const NavBar = () => {
    return (
       <nav className="flex lg:justify-between gap-5 mb-6">
        <div className="logo">
    <img className="w-20" src="../../../assets/logo.png" alt="" />
        </div>
    
<div className="flex items-center md:gap-6 gap-2" >
     <ul className="flex md:gap-6 gap-2">
        <li><a href="">Home</a></li>
        <li><a href="">Fixture</a></li>
        <li><a href="">Teams</a></li>
        <li><a href="">Schedules</a></li>
     </ul>
        
        <button className="flex gap-1 items-center px-2 py-1 border-1  rounded-[7px]">
            <h3><span>0</span> Coin</h3>
            <img className="h-8" src="https://img.icons8.com/?size=96&id=LVIob8w9LnNE&format=gif" alt="" />
        </button>
        </div>

        
       </nav>
    );
};

export default NavBar;