import Caption from "./Components/Caption";
import Carousel from "./Components/Carousel";
import NumberCaption from "./Components/NumberCaption";
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
   <NumberCaption desc="Packing & Storage" num={"01"}/>
   <PackingStorageComponent/>
   {/* <Caption title="Package & Strage"/> */}
   
      
    </div>
  )
}

export default App
