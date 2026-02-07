import Carousel from "./Components/Carousel";
import PackingStorageComponent from "./Components/PackingStorageComponent";
import Navbar from "./Components/TopBar"
import TopBar from './Components/TopBar';
import TrackerComponent from "./Components/TrackerComponent";


function App() {
 

  return (
    <div className="bg-background py-3">
   <TopBar/>
   <Carousel/>
   <TrackerComponent/>
   {/* <PackingStorageComponent/> */}
      
    </div>
  )
}

export default App
