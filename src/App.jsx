
import { useEffect, useState } from 'react'
import './App.css'
import Footer from './Components/Footer/Footer'
import Players from './Components/Main/Players'
import SelectedPlayers from './Components/Main/selectedPlayers'
import Subscribe from './subscribe'
import { ToastContainer, toast } from 'react-toastify'
import Header from './Components/Header/Header'
import CentralNav from './Components/Main/CentralNav'

function App() {
  
const [players , setPlayers] =useState([]) ;
const [credit , setCredit] = useState(0) ;
const [headLine , SetHeadLine] = useState(true) ;
const [selectedPlayers, setSelectedPlayers] = useState([]) ; 

useEffect(() => 
{
    fetch('../players.json') 
    .then(res=> res.json())
    .then(data => setPlayers(data)) 
},[])


   const checkAvailability =(id) =>
   
       selectedPlayers.some(player => 
          player.id===id
       ) 
   

   const handleCredit =()  =>
   {
      setCredit (credit+100000) ; 
     
   }
    
   const selectedBtn = ()  =>
   {
      SetHeadLine(false) ;
      console.log("clicked") ;
     
   }
   const handleAvailable =() =>
   {
     SetHeadLine(true) ;
     console.log("clicked") ;
   }
   const AddSelectedPlayer =(player) =>
   {
           const newPlayers = [...selectedPlayers,player] ; 
           setSelectedPlayers(newPlayers) ;

   }
   const deleteSelectedPlayer = (id) =>
   {
      const newPlayers = selectedPlayers.filter(data => data.id !=id) ;
      setSelectedPlayers(newPlayers) ;
   }

  return (
    <>
   

     <div >
      
 <div className="md:px-15 md:py-5 p-3 ">
<Header credit={credit} handleCredit={handleCredit}></Header>   
       <CentralNav handleAvailable={handleAvailable} selectedBtn={selectedBtn} selectedPlayers ={selectedPlayers}  headLine={headLine}></CentralNav>
         <div className="relative">
       {
         headLine ?     
     <Players  players ={players} checkAvailability ={checkAvailability} selectedPlayers = {selectedPlayers}  headLine={headLine}  handleAvailable={handleAvailable} AddSelectedPlayer={AddSelectedPlayer}></Players>  :     <SelectedPlayers deleteSelectedPlayer ={deleteSelectedPlayer} selectedPlayers={selectedPlayers}  handleAvailable={handleAvailable}></SelectedPlayers>


       }
           <Subscribe></Subscribe>
           </div> 
    

     
     </div>
     <Footer></Footer>
   </div>
 

    
    
    
    <div className="mx-auto">
 
    </div>
          
 <ToastContainer/>
    

    </>
  )
}

export default App
