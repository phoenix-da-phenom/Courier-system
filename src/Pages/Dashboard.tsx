//import { useState } from "react"

import { useAuth } from "../Hooks/useAuth"


const Dashboard = () => {
    //const [parcelList, setParcelList]= useState(null)
    const {user, logout}= useAuth();


    console.log(user)

    const logOutUser=()=>{
        logout()
    }


  return (
    <div>
        <div>
            <h1>Welcome to your Control Panel</h1>
        </div>
        <div>
            <h4>List of created Parcels</h4>

        </div>
       <button onClick={logOutUser} className="bg-primary px-4 py-2 rounded-md">Logout</button>
    </div>
  )
}

export default Dashboard