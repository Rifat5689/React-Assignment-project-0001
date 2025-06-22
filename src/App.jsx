
import './App.css'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header'
import Players from './Components/Main/Players'
import SelectedPlayers from './Components/Main/selectedPlayers'

function App() {
  

  return (
    <>
     
     <div className="md:px-15 md:py-5 sm:p-3 ">
      <Header ></Header>
   
     <Players></Players>
     <SelectedPlayers></SelectedPlayers>
     <Footer></Footer>
     </div>
    

    </>
  )
}

export default App
