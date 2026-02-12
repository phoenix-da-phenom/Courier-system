import { useState, type ChangeEvent, type FormEvent } from "react";
import peopleHoldingBoxes from "../assets/4690a05b-0561-4e7b-82a9-a9e9feed56eb.webp";
import { ToastContainer, toast } from "react-toastify";
import axiosInstance from "../Lib/axiosInstance";
import { API_PATHS } from "../Lib/apiPath";
import type { AxiosError } from "axios";

interface QuoteResponse {
  message: string;
  [key: string]: any; // in case API sends extra data
}

export default function RequestQuoteComponent() {
  const [flightType, setFlightType] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [departure, setDeparture] = useState<string>("");
  const [totalWeight, setTotalWeight] = useState<number>(0);
  const [recipient, setRecipient] = useState<string>("");
  const [expectedDeliveryDate, setExpectedDeliveryDate] = useState<Date | null>(
    null,
  );
  const[loading, setLoading]= useState<boolean>(false)
  const notify = (msg: string) => toast(msg);
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      //check if input are entered
      if (
        !flightType ||
        !email ||
        !departure ||
        !totalWeight ||
        !recipient ||
        !expectedDeliveryDate
      ) {
        alert("Please insert valid inputs!");
        return;
      }
      setLoading(true)
      const response = await axiosInstance.post(API_PATHS.QUOTE.INSERT, {
        flight_type: flightType,
        email_address: email,
        departure_country: departure,
        total_weight: totalWeight,
        recipient_country: recipient,
        expected_delivery_date: expectedDeliveryDate,
        status: "free",
      });
      toast.success(response.data.message);

    
    } catch (error) {
      const err= error as AxiosError<{message: string}>
    if (err.response?.status===400){
      toast.error(err.response.data.message)
      //"This email us already exist"
    }else{
      toast.error("Something went wrong. Please try again.");
    }
     console.error("Submission Failed.", err); 
    }finally{
      setLoading(false)
    }
  };
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

          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* ROW 1 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Flight Type
                </label>
                <select
                  onChange={(e) => setFlightType(e.target.value)}
                  className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-cyan-600"
                >
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
                  value={email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setEmail(e.target?.value)
                  }
                  type="email"
                  name="email"
                  className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-cyan-600"
                  required
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
                  onChange={(e) => setDeparture(e.target.value)}
                  value={departure}
                  type="text"
                  name="departureCountry"
                  className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-cyan-600"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Total Weight (KG)
                </label>
                <input
                  value={totalWeight ? totalWeight.toString() : 0}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setTotalWeight(parseInt(e.target?.value))
                  }
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
                  value={recipient}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setRecipient(e.target?.value)
                  }
                  type="text"
                  name="receiptCountry"
                  className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-cyan-600"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Expected Delivery Date
                </label>
                <input
                  value={
                    expectedDeliveryDate
                      ? expectedDeliveryDate.toISOString().split("T")[0]
                      : ""
                  }
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setExpectedDeliveryDate(
                      e.target.value ? new Date(e.target.value) : null,
                    )
                  }
                  type="date"
                  name="expectedDeliveryDate"
                  className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-cyan-600"
                  required
                />
              </div>
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-cyan-700 hover:bg-cyan-800 text-white py-3 rounded-md font-medium transition"
            >{loading ? "Adding request...": " Request Quote "}
             
            </button>
          </form>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </section>
  );
}
