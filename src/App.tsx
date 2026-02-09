import Caption from "./Components/Caption";
import Carousel from "./Components/Carousel";
import NumberCaption from "./Components/NumberCaption";
import PackageStage from "./Components/PackageStage";
import PackingStorageComponent from './Components/PackingStorageComponent';
import RequestQuoteComponent from "./Components/RequestQuoteComponent";
import TestimonialSection from "./Components/TestimonialSection";
import Navbar from "./Components/TopBar"
import TopBar from './Components/TopBar';
import TrackerComponent from "./Components/TrackerComponent";


function App() {
 

  return (
    <div className="bg-background py-3">
   <TopBar/>
   <Carousel/>
   <TrackerComponent/>
   <div className="mt-25">
    <NumberCaption desc="Packing & Storage" num={"01"}/>
   </div>
   
   <PackingStorageComponent/>
   {/* <Caption title="Package & Strage"/> */}
   
   <RequestQuoteComponent/>
< PackageStage/>
<TestimonialSection/>
   
      
    </div>
  )
}

export default App
