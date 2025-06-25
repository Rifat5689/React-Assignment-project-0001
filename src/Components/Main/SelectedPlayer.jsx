
const SelectedPlayer = ({player,deleteSelectedPlayer}) => {
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
    return (
        <div className="flex justify-between items-center mb-6 border-1 border-gray-300 rounded-[10px] p-3">
            <div className="flex gap-3 items-center ">
            <div> 
                <img className="w-[75px] h-[75px] rounded-[10px] object-cover" src={player.image} alt="" />
            </div>
            <div className="space-y-1">
                <h1 className="font-bold text-xl">{player.name}</h1>
                <p className="text-[#C7C7C7] text-[16px]">{player.rating.battingStyle}
                </p>
            </div>
            </div>

            <button onClick ={()=>deleteSelectedPlayer(player.id)}><img className="w-7" src="https://img.icons8.com/?size=160&id=102350&format=png" alt="" /></button>
            
        </div>
    );
};

export default SelectedPlayer;