
import Carousel from "./Components/Carousel";
import LatestNews from "./Components/LatestNews";
import NumberCaption from "./Components/NumberCaption";
import PackageStage from "./Components/PackageStage";
import PackingStorageComponent from './Components/PackingStorageComponent';
import RequestQuoteComponent from "./Components/RequestQuoteComponent";
import SponsorComponent from "./Components/SponsorComponent";
import TestimonialSection from "./Components/TestimonialSection";

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
<LatestNews/>
<SponsorComponent/>
   
      
    </div>
  )
}

export default App
