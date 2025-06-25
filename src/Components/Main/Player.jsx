import React from 'react';
import { toast, ToastContainer } from 'react-toastify';

// {
//     "name": "Nasum Ahmed",
//     "country": "Bangladesh",
//     "role": "Bowler",
//     "rating": {
//       "battingStyle": "Left-Hand-Bat"
//     },
//     "price": 900000,
//     "image": "https://upload.wikimedia.org/wikipedia/commons/0/0e/Nasum_Ahmed.jpg",
//     "buttonText": "Choose Player"
//   }
const Player = ({player,AddSelectedPlayer,selectedPlayers,checkAvailability}) => {
  console.log(selectedPlayers.length) ;
 const {name, country,role,rating,price,image}= player ;
    return (
        <div className="p-6 shadow-blue-200  border-1  border-gray-200 mt-4 rounded-[7px] ">
           <div>
            <img className="w-[300px] shadow-amber-50 h-[200px]  object-cover rounded-[7px] mb-3" src={image} alt="" />
           </div>
           <div className="flex gap-3 items-center">
            <img className="w-6" src="https://img.icons8.com/?size=60&id=99268&format=png" alt="" />
            <h3 className="font-semibold text-xl">{name}</h3>
           </div>
           <div className="flex justify-between items-center">
            <div className="flex gap-3  items-center">
                <img className="w-5" src="https://img.icons8.com/?size=96&id=TyDZNgOeTyqW&format=png" alt="" />
                <p className="text-[#C7C7C7]">{country}</p>
            </div>
             <p className="px-4 py-2 text-[14px] bg-[#f3f3f3] rounded-[7px] mb-3">{role}</p>

           </div>
        
           <hr className="text-gray-200" />

           <div>
          <div className="flex justify-between items-center">
            <h2 className="font-bold text-[16px]">Rating</h2>
            <img className="w-25" src="https://i.ibb.co/TDvyKSVQ/rating.png" />
          </div>
            <div className="flex items-center justify-between">
       <h3 className="font-bold text-[16px]">Bating Style</h3>
        <h3 className="text-[#C7C7C7]">{rating.battingStyle}</h3>
            </div>
            <div className="flex items-center justify-between mt-2">
              <p className="font-bold text-[16px] ">Price : ${price}</p>
              <button onClick={() => 
              {
                if(selectedPlayers.length <6 )
                {
                   if(!checkAvailability(player.id))
                   {
 toast.success(`Congrats !! ${player.name} has been selected `,{
                       position : "top-center",
   autoClose :2000                    }
                    )
                    AddSelectedPlayer(player) ; 
                   }
                   else 
                   {
                     toast.error("Choose Another Player",{
                       position : 'top-center' ,
                       autoClose :2000
                     }) ; 
                   }
                   
                }
                else {
                       toast.error('You cannot add more Player',{
   position: "top-center",
   autoClose :2000    }); 
                }
  
 
              }}  className=" hover:bg-amber-300 cursor-pointer px-4 py-1 rounded-[7px] border-1 border-gray-200 ">Choose Player</button>
            </div>
           </div>

        </div>
    );
};

export default Player;