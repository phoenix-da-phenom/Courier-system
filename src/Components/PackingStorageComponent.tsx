
import Icon1 from "../assets/icon01.png";
import Icon2 from "../assets/icon02.png";
import Icon3 from "../assets/icon03.png";

export default function PackingStorageComponent() {
  return (
    <section className="py-12">
      <div className="my-container grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <p className="text-gray-700 leading-relaxed">
            Bringing you industry-specific expertise, whatever you're shipping,
            wherever you're shipping it.
          </p>

          <ul className="list-disc pl-5 mt-4 space-y-2 text-gray-600">
            <li>Shipper delivers a professional, efficient service.</li>
            <li>Tailored to the specific needs of your business.</li>
            <li>Our services are designed around you.</li>
          </ul>
        </div>

        {/* RIGHT CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* CARD 1 */}
          <div className="text-center shadow-md rounded-lg overflow-hidden">
            <div className="bg-cyan-700 p-5 flex flex-col items-center gap-3 text-white">
              <img src={Icon1} alt="Sea Shipping" className="w-12" />
              <h3 className="font-semibold">SEA SHIPPING</h3>
            </div>
            <div className="bg-amber-600 p-4 text-white text-sm">
              We want to ensure that it's as easy as possible to use the site.
            </div>
          </div>

          {/* CARD 2 */}
          <div className="text-center shadow-md rounded-lg overflow-hidden">
            <div className="bg-cyan-700 p-5 flex flex-col items-center gap-3 text-white">
              <img src={Icon2} alt="Air Shipping" className="w-12" />
              <h3 className="font-semibold">AIR SHIPPING</h3>
            </div>
            <div className="bg-amber-600 p-4 text-white text-sm">
              Shipments moving whether you've worked with us for years or are completely new.
            </div>
          </div>

          {/* CARD 3 */}
          <div className="text-center shadow-md rounded-lg overflow-hidden">
            <div className="bg-cyan-700 p-5 flex flex-col items-center gap-3 text-white">
              <img src={Icon3} alt="Land Shipping" className="w-12" />
              <h3 className="font-semibold">LAND SHIPPING</h3>
            </div>
            <div className="bg-amber-600 p-4 text-white text-sm">
              International shipping. For further assistance, please get in touch.
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
