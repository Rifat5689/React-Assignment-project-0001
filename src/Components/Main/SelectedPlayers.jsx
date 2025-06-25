import SelectedPlayer from "./SelectedPlayer";
const SelectedPlayers = ({selectedPlayers,deleteSelectedPlayer,handleAvailable}) => {
    return (
        <div className=" mt-5 mb-[100px]">
            {
                selectedPlayers.map(player => <SelectedPlayer deleteSelectedPlayer={deleteSelectedPlayer} key={player.id} player={player}></SelectedPlayer>)
            }
            <button onClick ={handleAvailable} className="px-5 py-2   rounded-[7px]  font-bold bg-amber-300">Add More Player</button>
        </div>
    );
};

export default SelectedPlayers;