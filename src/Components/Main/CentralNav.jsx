import React from 'react';

const CentralNav = ({handleAvailable, selectedBtn,headLine,selectedPlayers}) => {
    return (
       <nav className ="flex justify-between items-center mt-5">
        {
             headLine ?<h3 className="font-bold text-xl ">Available Players</h3> : <h3 className="font-bold text-xl ">Selected Players ({selectedPlayers.length}/6) </h3>
        }
        <div className="border-[#c7c7c7] border-1  rounded-[7px]">
            <button onClick={handleAvailable} className={` px-5 py-2 border-r-0  rounded-[7px] rounded-r-none font-bold  ${headLine?"bg-orange-300" :" bg-white" }  `}>Available</button>
        <button onClick ={selectedBtn}  className={`text-[#605f5f]  px-5 py-2  rounded-[7px]  border-l-0  ${headLine?"bg-white font-normal text-[#605f5f]" :" bg-orange-300 font-bold text-black"}  rounded-l-none`}>Selected <span>({selectedPlayers.length})</span></button>
        </div>
        </nav>
    );
};

export default CentralNav;