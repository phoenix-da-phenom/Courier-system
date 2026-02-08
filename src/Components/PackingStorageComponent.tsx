import React from "react";
import Icon1 from "../assets/icon01.png"
import Icon2 from "../assets/icon02.png"
import Icon3 from "../assets/icon03.png"

export default function PackingStorageComponent() {
  return (
    <div className="">
      <div className="my-container flex items-center">
        <div>
          <div className="mt-2">
            <p>
              Bringing you industry- specific expertise, whatever you're
              shipping wherever you're shipping it
            </p>
            <div className="my-2">
              <ul className="type-disc">
                <li>Shipper delivers a professional, efficient service .</li>
                <li>Tailored to the specific needs of your business.</li>
                <li>Our service are designed around you.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex items-center "> 
            <div className="">

                <img src={Icon1}/>



            </div>
            <div>
                
                <img src={Icon2}/>

                
                </div>
            <div>
                
             <img src={Icon3}/>

                
                </div>

        </div>
      </div>
    </div>
  );
}
