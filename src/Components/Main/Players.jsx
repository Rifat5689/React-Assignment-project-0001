import Player from "./Player";

const Players = ({players,AddSelectedPlayer,selectedPlayers,checkAvailability}) => {

    return (
        
       
        
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 mt-5 mb-[100px]">
            {
                 players.map(player => <Player key={player.id} selectedPlayers ={selectedPlayers} player={player} AddSelectedPlayer={AddSelectedPlayer} checkAvailability={checkAvailability}></Player>)
            }
       
        
         </div>

      

        )
    
};

export default Players;