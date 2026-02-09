import React from "react";
import peopleHoldingBoxes from "../assets/4690a05b-0561-4e7b-82a9-a9e9feed56eb.webp";

export default function RequestQuoteComponent() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="my-container grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        
        {/* IMAGE */}
        <div className="w-full">
          <img
            src={peopleHoldingBoxes}
            alt="People holding boxes"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* FORM */}
        <div
          id="requestFreeQuote"
          className="bg-white shadow-lg rounded-lg p-8"
        >
          <h4 className="text-2xl font-semibold text-gray-800 mb-6">
            Request a Free Quote
          </h4>

          <form className="space-y-6">
            
            {/* ROW 1 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Flight Type
                </label>
                <select className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-cyan-600">
                  <option>Select Type</option>
                  <option>Air Freight</option>
                  <option>Ocean Freight</option>
                  <option>Road Freight</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-cyan-600"
                />
              </div>
            </div>

            {/* ROW 2 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Departure Country
                </label>
                <input
                  type="text"
                  name="departureCountry"
                  className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-cyan-600"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Total Weight (KG)
                </label>
                <input
                  type="text"
                  name="totalWeight"
                  className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-cyan-600"
                />
              </div>
            </div>

            {/* ROW 3 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Recipient Country
                </label>
                <input
                  type="text"
                  name="receiptCountry"
                  className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-cyan-600"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Expected Delivery Date
                </label>
                <input
                  type="date"
                  name="expectedDeliveryDate"
                  className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-cyan-600"
                />
              </div>
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full bg-cyan-700 hover:bg-cyan-800 text-white py-3 rounded-md font-medium transition"
            >
              Request Quote
            </button>

          </form>
        </div>
      </div>
    </section>
  );
}
