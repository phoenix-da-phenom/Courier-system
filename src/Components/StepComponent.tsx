import React from "react";
import NumberCaption from "./NumberCaption";

export default function StepComponent() {
  return (
    <div className="flex gap-5 uppercase my-container">
     <div
  className="relative h-60 border overflow-hidden rounded-lg"
  style={{
    backgroundImage: "url('/slide5.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* Blur overlay */}
  <div className="absolute inset-0 bg-black/40 backdrop-blur-md"></div>

  {/* Content */}
  <div className="relative z-10 h-full flex flex-col justify-center items-center text-white">
    <div>
      <NumberCaption desc="Parking Space" num="01" />
      <h6 className="text-center font-bold text-2xl">STORAGE</h6>
    </div>

    <div className="mt-auto mb-4">
      <a href="#" className="underline hover:text-gray-200">
        READ MORE
      </a>
    </div>
  </div>
</div>


     <div
  className="relative h-60 border overflow-hidden rounded-lg"
  style={{
    backgroundImage: "url('/slide7.jpeg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* Blur overlay */}
  <div className="absolute inset-0 bg-black/40 backdrop-blur-md"></div>

  {/* Content */}
  <div className="relative z-10 h-full flex flex-col justify-center items-center text-white">
    <div>
      <NumberCaption desc="Landing Features" num="02" />
      <h6 className="text-center font-bold text-2xl">STORAGE</h6>
    </div>

    <div className="mt-auto mb-4">
      <a href="#" className="underline hover:text-gray-200">
        READ MORE
      </a>
    </div>
  </div>
</div>

     
     
        <div
  className="relative h-60 border overflow-hidden rounded-lg"
  style={{
    backgroundImage: "url('/slide5.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* Blur overlay */}
  <div className="absolute inset-0 bg-black/40 backdrop-blur-md"></div>

  {/* Content */}
  <div className="relative z-10 h-full flex flex-col justify-center items-center text-white">
    <div>
      <NumberCaption desc="Delivery services" num="03" />
      <h6 className="text-center font-bold text-2xl">STORAGE</h6>
    </div>

    <div className="mt-auto mb-4">
      <a href="#" className="underline hover:text-gray-200">
        READ MORE
      </a>
    </div>
  </div>
</div>
     



      
    </div>
  );
}
