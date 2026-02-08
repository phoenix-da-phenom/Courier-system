import React from "react";
import Icon1 from "../assets/icon01.png";
import Icon2 from "../assets/icon02.png";
import Icon3 from "../assets/icon03.png";

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
            <div className="bg-cyan-700 p-4">
              <img src={Icon1} />
              <h1>SEA SHIPPING</h1>
            </div>
            <article className="bg-amber-600 p-3">
              <p>
                We want to ensure tht ith's as easy as possible to use the site
                to get.
              </p>
            </article>
          </div>
          <div className="bg-cyan-700 p-4" >
            <img src={Icon2} />
            <h1>AIR SHIPPING</h1>
            <article className="bg-amber-600 p-3">
              <p>Shipments moving whether you've worked with us for years completely new</p>

            </article>

          </div>
          <div className="bg-cyan-700 p-4">
            <img src={Icon3} />
            <h1>LAND SHIPPING</h1>
          <article className="p2 bg-amber-600 p-3">
            <p>International shipping. For further assistance, Please get in touch.</p>

          </article>
          </div>
        </div>
      </div>
    </div>
  );
}
