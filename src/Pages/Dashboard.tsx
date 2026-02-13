//import { useState } from "react"

import { useAuth } from "../Hooks/useAuth"


const Dashboard = () => {
    //const [parcelList, setParcelList]= useState(null)
    const {user, logout}= useAuth();


    console.log(user)


  return (
    <div>
        <div>
            <h1>Welcome to your Control Panel</h1>
        </div>
        <div>
            <h4>List of created Parcels</h4>

        </div>
       
    </div>
  )
}

export default Dashboard